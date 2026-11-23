// Fruit List component using map
const fruits = [
  {id: 1, name: "Apple", color: "Red"},
  {id: 2, name: "Banana", color: "Yellow"},
  {id: 3, name: "Grapes", color: "Purple"},
  {id: 4, name: "Orange", color: "Orange"},
];

export function FruitList () {
  return (
    <div>
      <h3>Fruit List</h3>
      {fruits.map((fruit) => (
        <div key={fruit.id} style={{border: "1px solid #ccc", padding: "10px", margin: "5px"}}>
          <span style={{color: fruit.color}}>●</span> {fruit.name}
        </div>
      ))}
    </div>
  );
}