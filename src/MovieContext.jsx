import React, { useContext, createContext, useState } from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
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
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
