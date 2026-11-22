import { useState } from "react";

export function Heading ({text , size}) {
  return (
    <>
    <h1 style={{fontSize:size}}>{text}</h1>
    </>
  );
}

export function Avatar ({imageUrl , name}) {
  return (
    <>
    <img src= {imageUrl} alt= {name} style={{borderRadius: "50%" , width: "200px", height: "200px" , borderRadius: "50%", objectFit: "cover",}} />
    <p>{name}</p>
    </>
  );
}

export function Badge({ label, color = "gray" }) {
  return (
    <span
      style={{
        backgroundColor: color,
        padding: "4px 10px",
        borderRadius: "4px",
        color: "#fff",
      }}
    >
      {label}
    </span>
  );
}

export function DetailCard({ title, description }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px", margin: "10px" }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export function DaysList({ days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "16px", borderRadius: "8px", margin: "10px" }}>
      <h3>Days of the Week</h3>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {days.map((day, index) => (
          <li key={index} style={{ padding: "6px 0", borderBottom: "1px solid #eee" }}>
            {day}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ margin: "10px", padding: "10px", border: "1px solid #ddd" }}>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export function ColorBoxes() {
  const colors = [
    { name: "Red", color: "red" },
    { name: "Green", color: "green" },
    { name: "Blue", color: "blue" }
  ];
  return (
    <div style={{ margin: "10px", padding: "10px", border: "1px solid #ddd" }}>
      <h3>Color Boxes</h3>
      <div style={{ display: "flex", gap: "10px" }}>
        {colors.map((c, i) => (
          <div key={i} style={{ width: "60px", height: "60px", backgroundColor: c.color, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
            {c.name}
          </div>
        ))}
      </div>
    </div>
  );
}

