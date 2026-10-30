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




const expenses = [
  { description: "Groceries", category: "Food", amount: 50 },
  { description: "Movie", category: "Entertainment", amount: 20 },
  { description: "Restaurant", category: "Food", amount: 40 },
  { description: "Electricity", category: "Bills", amount: 80 },
  { description: "Concert", category: "Entertainment", amount: 100 }
];


const catagory = {}
for (const elem of expenses) {
  if(!catagory[elem.category]){
    catagory[elem.category] = [elem]  
  }
  else{
    catagory[elem.category].push(elem);
  }
}

console.log(catagory);

let findExpensive = expenses[0];
for (const elem of expenses){
  if(elem.amount > findExpensive.amount){
    findExpensive = elem;
  }
}
console.log(findExpensive);


const categoryTotal = {};
for (const elem of expenses){
  if(!categoryTotal[elem.category]){
    categoryTotal[elem.category] = elem.amount;
  }
  else {
    categoryTotal[elem.category]+=elem.amount;
  }
}
console.log(categoryTotal);