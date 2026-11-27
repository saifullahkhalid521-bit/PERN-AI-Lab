// Button component with variants
export function Button({ children, variant = "primary", onClick, disabled = false }) {
  const baseStyle = {
    padding: "10px 20px",
    border: "none",
    borderRadius: "6px",
    cursor: disabled ? "not-allowed" : "pointer",
    fontSize: "14px",
    fontWeight: 600,
    opacity: disabled ? 0.6 : 1,
  };

  const variants = {
    primary: { backgroundColor: "#3b82f6", color: "white" },
    secondary: { backgroundColor: "#64748b", color: "white" },
    outline: { backgroundColor: "transparent", color: "#3b82f6", border: "2px solid #3b82f6" },
    danger: { backgroundColor: "#ef4444", color: "white" },
  };

  const style = { ...baseStyle, ...variants[variant] };

  return (
    <button style={style} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}