import React, { useState, useEffect } from 'react';

const CounterWithHooks = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count + 1);
  useEffect(() => {
    document.title = `You clicked ${count} times`
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={incrementCount}>Click Me</button>
    </div>
  )
}

export default CounterWithHooks;