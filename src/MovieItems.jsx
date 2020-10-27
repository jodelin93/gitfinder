import React from 'react';

const MovieItems = ({ movies }) => {
  return (
    <div className="card">
      <h3>{movies.name}</h3>
      <p>{movies.price}</p>
    </div>
  );
};

export default MovieItems;
