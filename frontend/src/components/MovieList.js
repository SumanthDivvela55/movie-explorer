import React from 'react';
import Movie from './Movie';

function MovieList({ movies }) {
    if (movies.length === 0) {
        return (
            <div className="no-movies">
                <img src="/no-movies-found.png" alt="No Movies Found" />
                <p>No movies found</p>
            </div>
        );
    }

    return (
        <div className="movie-list">
            {movies.map((movie) => (
                <Movie key={movie.imdbID} movie={movie} />
            ))}
        </div>
    );
}

export default MovieList;
