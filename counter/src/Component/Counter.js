import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    console.log(count);
    return (
        <div>
            <button onClick={() => setCount(count+1)}>Increment</button>
            <h1>Hello, I'm component : {count}</h1>
        </div>
    );
}

export default Counter;
