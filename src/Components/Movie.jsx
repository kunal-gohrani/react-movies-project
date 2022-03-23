import React from "react";
import { useParams } from "react-router";

import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

import Grid from "./Grid";
import Spinner from "./Spinner";
import BreadCrumb from "./Breadcrumb";
import MovieInfo from "./MovieInfo";
import MovieInfoBar from "./MovieInfoBar";
import Actor from "./Actor";
// Hook
import { useMovieFetch } from "../Hooks/useMovieFetch";

// Image
import NoImage from "../images/no_image.jpg";

const Movie = () => {
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMovieFetch(movieId);
  if (loading) return <Spinner />;
  if (error) return <p>Error</p>;
  const movieTitle = movie.original_title;
  console.log(movie);
  if (!loading && !error)
    return (
      <>
        <BreadCrumb movieTitle={movieTitle} />
        <MovieInfo movie={movie} />
        <MovieInfoBar movie={movie} />
        <Grid header="Actors">
          {movie.actors &&
            movie.actors.map((actor) => (
              <Actor
                key={actor.credit_id}
                name={actor.name}
                character={actor.character}
                imageURL={
                  actor.profile_path
                    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                    : NoImage
                }
              />
            ))}
        </Grid>
      </>
    );
};

export default Movie;
