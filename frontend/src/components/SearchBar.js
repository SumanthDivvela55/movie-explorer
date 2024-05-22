import React, { useState } from 'react';

function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchType, setSearchType] = useState('s');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchTerm) {
            onSearch(searchTerm, searchType);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for movies..."
            />
            <select onChange={(e) => setSearchType(e.target.value)}>
                <option value="s">Title</option>
                <option value="genre">Genre</option>
            </select>
            <button type="submit">Search</button>
        </form>
    );
}

export default SearchBar;
