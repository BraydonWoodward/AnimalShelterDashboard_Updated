import React, { useState } from 'react';

/**
 * SearchBox - Provides a text input for filtering animal records.
 * @param {Function} onSearch - Callback function to perform search/filter.
 */
const SearchBox = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  // Handle form submission to trigger search.
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search by name, breed, etc."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBox;