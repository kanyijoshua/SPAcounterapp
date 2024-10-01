import React, { useState, useEffect } from 'react';
import '../Search.css'; 

const DebouncedSearch = ({ counts }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCounts, setFilteredCounts] = useState(counts);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchTerm) {
        setFilteredCounts(counts.filter(count => count.toString() === searchTerm));
      } else {
        setFilteredCounts(counts);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm, counts]);

  

  return (
    <div className="search-container">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
        className="search-input"
      />
      <ul className="search-results">
        {filteredCounts.length > 0 ? (
          filteredCounts.map((count, index) => (
            <li key={index} className="search-item">{count}</li>
          ))
        ) : (
          <li className="no-results">No results found</li>
        )}
      </ul>
    </div>
  );
};

export default DebouncedSearch;
