export function Greeting ({name = "Laal miya" , age = "99"}) {
  return (
    <>
    <h2>Welcome {name} , your age is: {age} years</h2>
    </>
  );
}

export function Button ({text , color = "blue"}){
  return (
    <button style = {{backgroundColor: color}}> {text} </button>
  );
}