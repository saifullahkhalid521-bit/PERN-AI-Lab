export function ProfileStats({ username, posts, followers, following }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        margin: "10px",
        display: "flex",
        justifyContent: "space-around",
        textAlign: "center",
      }}
    >
      <div>
        <h4>{username}</h4>
      </div>
      <div>
        <p style={{ fontSize: "18px", fontWeight: "bold", margin: 0 }}>{posts}</p>
        <p style={{ margin: 0, color: "#666" }}>Posts</p>
      </div>
      <div>
        <p style={{ fontSize: "18px", fontWeight: "bold", margin: 0 }}>{followers}</p>
        <p style={{ margin: 0, color: "#666" }}>Followers</p>
      </div>
      <div>
        <p style={{ fontSize: "18px", fontWeight: "bold", margin: 0 }}>{following}</p>
        <p style={{ margin: 0, color: "#666" }}>Following</p>
      </div>
    </div>
  );
}