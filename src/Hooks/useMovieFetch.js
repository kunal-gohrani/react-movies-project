import { useState, useEffect } from "react";
import API from "../API";
import { isPersistedState } from "../helpers";

export const useMovieFetch = (movieId) => {
  const initialState = {};
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setError(false);
      try {
        const movie = await API.fetchMovie(movieId);
        const credits = await API.fetchCredits(movieId);

        const directors = credits.crew.filter(
          (member) => member.job === "Director"
        );
        // console.log('setting state now');
        setState({ ...movie, actors: credits.cast, directors: directors });
      } catch (error) {
        setError(true);
        console.log(error);
      }
    };
    setLoading(true);
    const sessionState = isPersistedState(movieId);
    if (sessionState) {
      setState(sessionState);
    } else {
      fetchData();
    }

    setLoading(false);
  }, [movieId]);

  useEffect(() => {
    sessionStorage.setItem(movieId, JSON.stringify(state));
  }, [state, movieId]);
  return { state, loading, error };
};
