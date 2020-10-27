import React, { useReducer } from 'react';
import MovieReducer from './movieReducers';
import MovieContext from './movieContext';

const MovieState = (props) => {
  const initialState = {
    movies: [
      {
        name: 'Harry Potter',
        price: '$45',
        id: 1234,
      },
      {
        name: 'LA beaute dangereuse',
        price: '$78',
        id: 4321,
      },
      {
        name: 'I am in Love',
        price: '$34',
        id: 1324,
      },
      {
        name: 'Tittanic',
        price: '$50',
        id: 13249,
      },
    ],
  };

  const [state, dispatch] = useReducer(MovieReducer, initialState);

  const getMovies = () => {
    dispatch({
      type: 'getMovies',
    });
  };

  const setMovies = (n, p) => {
    var count = 1234;
    const movie = {
      name: [n],
      price: [p],
      id: [count + 1],
    };
    dispatch({
      type: 'setMovies',
      payload: movie,
    });
  };

  return (
    <MovieContext.Provider
      value={{
        movies: state.movies,
        getMovies,
        setMovies,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieState;
