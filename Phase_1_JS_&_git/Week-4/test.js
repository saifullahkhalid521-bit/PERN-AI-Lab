console.log('level -> 3 😎');

function log(ind , ...msg){
  return `[${ind}] ${msg.join(', ')}`;
}
console.log(log("INFO" , "Server started" , "Port 3000"));

function multiplyAll(mltp , ...rest){
  return rest.map((n) => mltp * n);
}
console.log(multiplyAll(2 , 3 , 4 , 5));

function pick(obj , ...rest){
  return rest.reduce((acc , n) => {
    if (n in obj) acc[n] = obj[n];
    return acc;
  },{});
}
const user3 = { name: "Alice", age: 25, city: "NYC", role: "admin" };
console.log(pick(user3, "name", "city"));

const user4 = {name: "RIO" , age:25 , city: "NYC" , role: 'admin'};

function omit(obj , ...keys){
  const result = { ...obj};
  for (const key  of keys) {
    delete result[key];
  }   
  return result;
}
console.log(omit(user4 , 'role' , 'age'));

function Button({ variant, ...rest }) {
  return { className: `btn-${variant}`, ...rest };
}
function Button({ variant, ...rest }) {
  return { className: `btn-${variant}`, ...rest };
}
console.log(Button({ variant: "primary", onClick: "fn", disabled: true }));