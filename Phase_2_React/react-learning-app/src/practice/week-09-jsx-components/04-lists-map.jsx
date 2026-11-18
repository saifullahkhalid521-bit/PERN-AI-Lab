  const Users = [
    {id: 1 , name: "Saif" , city: "Ranchi" , role: "WebDev"},
    {id: 2 , name: "Ego" , city: "Delhi" , role: "Trainer"},
    {id: 3 , name: "Robot" , city: "Pune" , role: "Security"},
  ]

export function UserList () {

  return (
    <div>
      {Users.map((user) => (
        <div key= {user.id} style={{ border: "2px solid white" , margin: "10px" , padding: "10px"}}>
        <h3>{user.name}</h3>
        <p>Your city is {user.city} & role is {user.role}</p>
      </div>
      ))}
    </div>
  );
}