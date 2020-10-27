import React, { useContext } from 'react';
import MovieContext from './context/movies/movieContext';
//import { MovieContext } from './MovieContext';

const NavBar = () => {
  //const [movies] = useContext(MovieContext);
  const { movies } = useContext(MovieContext);
  return (
    <div className="navbar bg-danger">
      <h1>Jodelin Desrameaux</h1>
      <p>the number of movies is: {movies.length}</p>
    </div>
  );
};

export default NavBar;
