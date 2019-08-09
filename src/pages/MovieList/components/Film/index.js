import React from 'react';

const Film = ({movie}) => (
  <div className='listing__content'>
    <h3 className='h3'>{movie.title}</h3>

    <p>{movie.genre_ids.join('/')}</p>

    <img
      className='img'
      alt={movie.title}
      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
    />
  </div>
);

export default Film;
