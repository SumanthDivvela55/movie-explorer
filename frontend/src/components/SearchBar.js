import React, { useState } from 'react';

function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchType, setSearchType] = useState('s');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (searchTerm) {
            setLoading(true);
            await onSearch(searchTerm, searchType);
            setLoading(false);
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
            <button type="submit" disabled={loading}>
                {loading ? 'Loading...' : 'Search'}
            </button>
        </form>
    );
}

export default SearchBar;
