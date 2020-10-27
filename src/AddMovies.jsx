import React, { useState, useContext } from 'react';
import MovieContext from './context/movies/movieContext';

const AddMovies = () => {
  const MoveContext = useContext(MovieContext);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  // const [movies, setMovies] = useContext(MovieContext);
  const updateName = (e) => {
    setName(e.target.value);
  };

  const updatePrice = (e) => {
    setPrice(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    MoveContext.setMovies(name, price);
    // setMovies((prevMovies) => [...prevMovies, { name: name, price: price }]);
    // setName('');
    // setPrice('');
  };
  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <input type="text" name="name" value={name} onChange={updateName} />
        <input type="text" name="price" value={price} onChange={updatePrice} />
        <input type="submit" value="add" />
      </form>
    </div>
  );
};

export default AddMovies;
