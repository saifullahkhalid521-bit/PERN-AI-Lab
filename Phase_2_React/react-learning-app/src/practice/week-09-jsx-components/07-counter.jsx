// Counter component with increment and decrement
import { useState } from 'react';

export function Counter({ initialValue = 0 }) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);

  return (
    <div style={{ border: "2px solid #333", padding: "20px", margin: "10px", borderRadius: "8px", textAlign: "center" }}>
      <h3>Counter</h3>
      <p style={{ fontSize: "2rem", fontWeight: "bold", margin: "10px 0" }}>{count}</p>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <button onClick={decrement} style={{ padding: "8px 16px", fontSize: "1rem" }}>Decrement</button>
        <button onClick={reset} style={{ padding: "8px 16px", fontSize: "1rem" }}>Reset</button>
        <button onClick={increment} style={{ padding: "8px 16px", fontSize: "1rem" }}>Increment</button>
      </div>
    </div>
  );
}