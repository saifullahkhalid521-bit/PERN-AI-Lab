export function UserCard () {
  return (
    <div>
      <h2>Saifullah</h2>
      <p>Learning React</p>
      <p>Future Full Stack Developer</p>
    </div>
  );
}

export function UserProfile() {
  const name = "Khalid";
  const age = 22;
  const skills = ["JS" ,"React"];

  return (
    <div className="Profile-card">
      <h1>Hello, {name}!</h1>
      <p>Age: {age} </p>
      <p>Next year:{age+1} </p>
      <p>Skills: {skills.length}</p>
    </div>
  );
}

export function JsxBasics () {
  const name = "Robot";
  const age = 22;
  const lang = "hindi";
  return (
    <div className="JSX-practice">
    <h1>JSX Practice</h1>
    <p>my name is {name}</p>
    <p>my age after 5 years {age + 5}</p>
    <p>I speak {lang.toUpperCase()} </p>
  </div>
  );
}