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

