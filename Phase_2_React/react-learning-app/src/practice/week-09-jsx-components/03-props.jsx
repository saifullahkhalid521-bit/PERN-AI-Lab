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

const data = {
  title : "Laptop",
  price: 50000,
  tags: ["electornics" , "tech"]
}
export function Product ({data}){
  return (
    <div>
    <h3>{data.title}</h3>
    <p>Price: {data.price}</p>
    <p>Tags: {data.tags.join(" | ")}</p>
    </div>
  );
}


export function AlertButton ({onClickAction , label}) {
  return (
    <button onClick={onClickAction}> {label} </button>
  );
}