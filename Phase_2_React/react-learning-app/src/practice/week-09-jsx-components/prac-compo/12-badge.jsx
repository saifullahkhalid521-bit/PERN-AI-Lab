// Badge component for status labels
export function Badge({ children, variant = "default", size = "medium" }) {
  const baseStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "9999px",
    fontWeight: 600,
    fontFamily: "system-ui, sans-serif",
  };

  const variants = {
    default: { backgroundColor: "#e2e8f0", color: "#334155" },
    success: { backgroundColor: "#dcfce7", color: "#166534" },
    warning: { backgroundColor: "#fef9c3", color: "#854d0e" },
    danger: { backgroundColor: "#fee2e2", color: "#991b1b" },
    info: { backgroundColor: "#dbeafe", color: "#1e40af" },
  };

  const sizes = {
    small: { padding: "2px 8px", fontSize: "11px" },
    medium: { padding: "4px 10px", fontSize: "12px" },
    large: { padding: "6px 14px", fontSize: "14px" },
  };

  const style = { ...baseStyle, ...variants[variant], ...sizes[size] };

  return <span style={style}>{children}</span>;
}