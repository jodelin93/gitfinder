import React, { useState, useContext, useEffect } from 'react';
import MovieItems from './MovieItems';
//import { MovieContext } from './MovieContext';
import MovieContext from './context/movies/movieContext';

const Movies = () => {
  const { movies } = useContext(MovieContext);
  const moviesContext = useContext(MovieContext);

  useEffect(() => {
    moviesContext.getMovies();
  }, [movies]);
  console.log(movies);
  return (
    <div>
      <h1>Jodelin Desrameaux</h1>
      {movies.map((movie) => (
        <MovieItems key={movie.id} movies={movie} />
      ))}
    </div>
  );
};

export default Movies;
