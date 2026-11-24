// Toggle Switch component with on/off states
import { useState } from 'react';

export function ToggleSwitch({ label = "Toggle", defaultChecked = false, onChange }) {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const handleToggle = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    if (onChange) onChange(newValue);
  };

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: "15px",
      padding: "15px",
      margin: "10px",
      border: "2px solid #333",
      borderRadius: "8px",
      backgroundColor: "#f9f9f9"
    }}>
      <span style={{ fontSize: "1.1rem", fontWeight: "500" }}>{label}</span>
      <button
        onClick={handleToggle}
        role="switch"
        aria-checked={isChecked}
        style={{
          width: "60px",
          height: "30px",
          borderRadius: "15px",
          border: "none",
          backgroundColor: isChecked ? "#4CAF50" : "#ccc",
          cursor: "pointer",
          position: "relative",
          transition: "background-color 0.3s"
        }}
      >
        <span
          style={{
            position: "absolute",
            top: "2px",
            left: isChecked ? "30px" : "2px",
            width: "26px",
            height: "26px",
            borderRadius: "50%",
            backgroundColor: "white",
            boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
            transition: "left 0.3s"
          }}
        />
      </button>
      <span style={{
        color: isChecked ? "#4CAF50" : "#666",
        fontWeight: "bold",
        minWidth: "40px"
      }}>
        {isChecked ? "ON" : "OFF"}
      </span>
    </div>
  );
}