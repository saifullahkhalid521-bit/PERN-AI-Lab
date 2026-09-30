const numbersM = [5 , 12 , 8 , 20 , 3 , 15];
console.log(numbersM.filter(ele => ele > 10).map(ele => ele * 2));

const productsM = [
  {name: "Laptop" , price: 50000},
  {name: "Mouse" , price: 800},
  {name: "Keyboard" , price: 1500},
  {name: "Monitor" , price: 12000},
]
const productFilMap = productsM.filter(ele => ele.price > 1000).map(ele => ele.name).sort((a , b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(productFilMap);

const ordersM = [
  {item: "Shirt" , price: 800 , quantity : 2},
  {item: "Shoes" , price: 2000 , quantity : 1},
  {item: "Cap" , price: 500 , quantity : 3},
  {item: "Watch" , price: 3000 , quantity : 1},
]
console.log(ordersM.filter(ele => ele.price * ele.quantity >= 1500).reduce((acc , ele) => {
  return acc + ele.price; 
}, 0))

const usersM = [
  {name: "Saif", skills: ["JS", "React"] },
  {name: "Ali", skills: ["PHP"] },
  {name: "Robot", skills: ["Node", "Express" , "PostgreSQL"] },
]
const twoSkills = usersM.filter(ele => ele.skills.length > 1);
const extraSkillsM = ["Git" , "GitHub"];
const newSkills = [...twoSkills].map(ele => ele.skills.push(...extraSkillsM));
console.log(newSkills);
console.log(twoSkills);

const studentsM = [
  {name: "Saif" , marks: [80 , 90 , 85] },
  {name: "Robot" , marks: [60 , 70 , 65] },
  {name: "Khalid" , marks: [90 , 95 , 88] },
  {name: "Ego" , marks: [75 , 80 , 70] }
]
const avgMoreT80 = studentsM.filter(ele => ele.marks.reduce((acc , n) => {
  return acc + n;
}, 0) / ele.marks.length >= 80) ;

const newAvgStudents = avgMoreT80.map(ele => {
  const average = ele.marks.reduce((acc , n) => acc + n, 0) / ele.marks.length;

  return {
    name: ele.name,
    average: average
  };
})
.sort((a , b) => b.average - a.average);
console.log(newAvgStudents);

//Set One
const users = [
  { name: "Charlie", role: "user", active: true },
  { name: "Alice", role: "admin", active: true },
  { name: "Bob", role: "user", active: false },
  { name: "Diana", role: "admin", active: true }
];
const upDateStr = users.reduce((acc , n) => {
  if (n.active){
    acc.push(`${n.name} (${n.role})`);
  }
  return acc ;
},[]).sort((a , b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(upDateStr);

const cart = [
  { item: "Book", price: 25, qty: 2 },
  { item: "Pen", price: 3, qty: 5 },
  { item: "Laptop", price: 999, qty: 1 }
];
const calcuCart = cart.reduce((acc , ele) => {
  return acc + (ele.price * ele.qty);
},0)
if(calcuCart > 100){
  console.log(calcuCart - (calcuCart / 10));
}

const users1 = [
  { name: "Alice", age: 30, active: false },
  { name: "Bob", age: 22, active: true },
  { name: "Charlie", age: 25, active: true },
  { name: "Diana", age: 19, active: false }
];
const youngAct = users1.filter(ele => ele.active).reduce((acc, n) => {
  if(acc > n){
    acc = n;
  }else {
    acc = acc;
  }
  return acc;
})
console.log(youngAct.name);

const posts = [  
  { title: "A", tags: ["js", "react"] },  
  { title: "B", tags: ["react", "css"] },  
  { title: "C", tags: ["js", "node"] }
];

const uniqueTags = [...new Set(
  posts.reduce((acc, post) => [...acc, ...post.tags], [])
)].sort();

console.log(uniqueTags); 
// Output: ["css", "js", "node", "react"]

const fields = ["john", "doe", "john@example.com"];
const fields2 = ["john", "", "john@example.com"];
const fields3 = ["john", "doe", "notanemail"];
function dataCheck(val){
  if(val.every(ele => ele !== "") && val.some(ele => ele.includes("@"))){
    return true;
  }
  else{
    return false;
  }
}
console.log(dataCheck(fields))
console.log(dataCheck(fields2))
console.log(dataCheck(fields3))

//set 2
const productsW = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 800 },
  { name: "Keyboard", price: 1500 },
  { name: "Monitor", price: 12000 }
];
const upProd = productsW.filter(ele => ele.price > 1000).map(ele => ele.name.toUpperCase());
console.log(upProd);

const usersW = [
  { name: "Ali", age: 16, city: "Delhi" },
  { name: "Saif", age: 22, city: "Ranchi" },
  { name: "John", age: 25, city: "Mumbai" }
];
const usr = usersW.find(ele => ele.age >= 18)
const {name , city , age} = usr;
console.log(name , city);

const marksW = [75 , 82 , 91 , 68 , 88];
const checkMarks = marksW.some(ele => ele > 90) && marksW.every(ele => ele > 50);
console.log(checkMarks);

const expensesW = [
  { category: "food", amount: 300 },
  { category: "travel", amount: 500 },
  { category: "food", amount: 200 },
  { category: "shopping", amount: 800 },
  { category: "travel", amount: 300 }
];
const expRedu = expensesW.reduce((acc , ele) => {
  if(acc[ele.category]){
    
    acc[ele.category]+= ele.amount;
  }
  else {
    acc[ele.category] = ele.amount;
  }
  return acc;
},{})
console.log(expRedu);

const studentsW = [
  { name: "Saif", marks: 85 },
  { name: "Ali", marks: 92 },
  { name: "John", marks: 78 },
  { name: "Ego", marks: 92 }
];
const stdchek = studentsW.sort((a , b) => {
  return b.marks - a.marks || a.name.toLowerCase().localeCompare(b.name.toLowerCase());
})
console.log(stdchek);

function combineW(...rest){
  return rest.reduce((acc ,n) => {
    acc.push(...n);
    return acc;
  },[]);
}
console.log(combineW(
  [1, 2],
  [3, 4],
  [5, 6]
));