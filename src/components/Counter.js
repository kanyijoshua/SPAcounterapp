import React, { useState } from 'react';

function Counter({ updateCounts }) {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        const newCount = count + 1;
        setCount(newCount);
        updateCounts(newCount);
    };

    const handleDecrement = () => {
        const newCount = count - 1;
        setCount(newCount);
        updateCounts(newCount);
    };

    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleIncrement}>+</button>
        </div>
    );
}

export default Counter;