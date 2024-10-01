import React from 'react';

function ThemeToggler({ theme, toggleTheme }) {
    return (
        <button onClick={toggleTheme}>
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
    );
}

export default ThemeToggler;