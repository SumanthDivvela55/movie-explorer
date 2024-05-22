import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';

function App() {
  const [movies, setMovies] = useState([]);

  const handleSearch = async (searchTerm, searchType) => {
    const response = await fetch(`http://localhost:5000/api/movies?searchTerm=${searchTerm}&searchType=${searchType}`);
    const data = await response.json();
    setMovies(data.Search || []);
  };

  return (
    <div className="App">
      <h1>Movie Explorer</h1>
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
