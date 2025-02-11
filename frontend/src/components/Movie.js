import React from 'react';

function Movie({ movie }) {
    return (
        <div className="movie">
            <img src={movie.Poster} alt={`${movie.Title} poster`} />
            <h2>{movie.Title}</h2>
            <p>{movie.Year}</p>
            <p>{movie.Type}</p>
        </div>
    );
}

export default Movie;
