export function WeatherCard({ city, temperature, condition }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        margin: "10px",
        maxWidth: "240px",
        textAlign: "center",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      <h3>{city}</h3>
      <p style={{ fontSize: "28px", margin: "8px 0" }}>{temperature}°C</p>
      <p style={{ color: "#555" }}>{condition}</p>
    </div>
  );
}