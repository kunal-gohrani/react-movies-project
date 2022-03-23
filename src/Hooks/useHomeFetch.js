import { useState, useEffect } from "react";
import API from "../API";
import { isPersistedState } from "../helpers";
const initialState = { page: 0, result: [], total_pages: 0, total_results: 0 };

export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const fetchMovies = async (page, searchTerm = "") => {
    try {
      setError(false);
      setLoading(true);
      const result = await API.fetchMovies(searchTerm, page);
      console.log(result);
      setState((prev) => ({
        ...result,
        result:
          page > 1 ? [...prev.results, ...result.results] : [...result.results],
      }));
    } catch (error) {
      setError(true);
      console.error(error);
    }
    setLoading(false);
  };

  // Initial Render and search
  useEffect(() => {
    const sessionState = isPersistedState("home");
    if (sessionState) {
      // console.log('got home session state');
      setState(sessionState);
      setLoading(false);
      return;
    }
    // setState(initialState);
    fetchMovies(1, searchTerm);
  }, [searchTerm]);

  // Load More Render
  useEffect(() => {
    if (!isLoadingMore) return;
    fetchMovies(state.page + 1, searchTerm);
    setIsLoadingMore(false);
  }, [searchTerm, isLoadingMore, state.page]);

  useEffect(() => {
    if (!searchTerm) {
      sessionStorage.setItem("home", JSON.stringify(state));
    }
  }, [searchTerm, state]);

  return {
    state,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    setIsLoadingMore,
    isLoadingMore,
  };
};
