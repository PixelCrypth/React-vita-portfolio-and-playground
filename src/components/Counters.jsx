import React, { useState } from 'react';

function Counters() {
  const [count, setCount] = useState(0);

  return (
    <div className="Counter-div">
      <h2>Counter</h2>
      <p>Click the button below to increase the count:</p>
      <button onClick={() => setCount((count) => count + 1)}>Click me</button>
      <p>Count: {count}</p>
    </div>
  );
}

export default Counters;
