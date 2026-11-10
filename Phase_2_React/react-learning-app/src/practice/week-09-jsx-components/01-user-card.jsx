// 01-user-card.jsx
function UserCard({ name, role, isOnline }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '8px' }}>
      <h3>{name}</h3>
      <p>Role: {role}</p>
      {isOnline ? <span style={{ color: 'green' }}>🟢 Online</span> : <span style={{ color: 'gray' }}>⚫ Offline</span>}
    </div>
  );
}

export default UserCard;