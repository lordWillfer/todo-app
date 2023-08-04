import React from "react";
import './Counter.css';

// Function Counter Component
function Counter() {
    return (
        <div className="counter">
            <button onClick={increment}>+1</button>
            <span className="count">0</span>
        </div>
    );
}

function increment() {
    console.log('Increment');
}

export default Counter;