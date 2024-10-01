import React, { useState, useEffect, lazy, Suspense } from 'react';
import Counter from './components/Counter';
import ThemeToggler from './components/ThemeToggler';
import './App.css';

const DebouncedSearch = lazy(() => import('./components/Search'));

function App() {
  const [counts, setCounts] = useState([]);
  const [theme, setTheme] = useState('light');
  const [showSearch, setShowSearch] = useState(false);

  // Effect for retrieving the saved theme from local storage on first render
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const updateCounts = (newCount) => {
    setCounts([...counts, newCount]);
  };

  // Function to toggle theme
  const toggleTheme = () => {
    // Toggle between light and dark themes
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Store the new theme in local storage
  };

  return (
    <div className={`App ${theme}`}>
      <Counter updateCounts={updateCounts} />
      <ThemeToggler theme={theme} toggleTheme={toggleTheme} />
      <button onClick={() => setShowSearch(!showSearch)}>
        {showSearch ? 'Hide Search' : 'Show Search'}
      </button>
      {showSearch && (
        <Suspense fallback={<div>Loading Search...</div>}>
          <DebouncedSearch counts={counts} />
        </Suspense>
      )}
    </div>
  );
}

export default App;
