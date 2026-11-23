// Simple Card component using props
export function SimpleCard ({title, description, color = "lightblue"}) {
  return (
    <div style={{border: "2px solid #333", padding: "15px", margin: "10px", backgroundColor: color, borderRadius: "8px"}}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}