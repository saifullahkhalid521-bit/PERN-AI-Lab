// PracticeApp.jsx
import UserCard from './01-user-card';

export default function Week09Practice() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Week 9: JSX & Components Practice</h1>
      <hr />
      
      <h2>Practice 1: User Card</h2>
      {/* Yahan hum apne component ko use kar rahe hain */}
      <UserCard name="Aman" role="Frontend Developer" isOnline={true} />
      <UserCard name="Riya" role="Backend Developer" isOnline={false} />
      
    </div>
  );
}