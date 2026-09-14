//find() method questions solving
//Level One
const nums = [3 ,7 ,12 , 5 ,20 ,15];
const findNums = nums.find(elem => elem > 10);
console.log(findNums);

const words = ["apple" , "banana" , "cherry" , "bluebery" , "avocado"];
const findWords = words.find(elem => elem.startsWith('b'));
console.log(findWords);

const numsN = [5 , 8 , -3 , 10 , -7 , 2];
const findnumsN = numsN.find(elem => elem < 0);
console.log(findnumsN);

//Level 2
const users = [
  {name: "Alice" , age: 25},
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 }
]
const findUser = users.find(elem => elem.name === "Charlie");
console.log(findUser);

const products = [
  { name: "Book", inStock: true },
  { name: "Pen", inStock: true },
  { name: "Laptop", inStock: false },
  { name: "Mouse", inStock: false }
];
const findProduct = products.find(elem => elem.inStock === false);
console.log(findProduct);

const students = [
  { name: "Sam", score: 78 },
  { name: "Rita", score: 92 },
  { name: "Tom", score: 88 },
  { name: "Zara", score: 95 }
];
const findStudent = students.find(elem => elem.score > 90)
console.log(findStudent);

//Level 3 
// 🔴
const usersA = [
  { name: "A", role: "user", active: true },
  { name: "B", role: "admin", active: false },
  { name: "C", role: "admin", active: true },
  { name: "D", role: "admin", active: true }
];
const findActiveUser = usersA.find(elem => elem.role === 'admin' && elem.active);
console.log(findActiveUser);

const usersE = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];
const finduserE = usersE.find(elem => elem.id === 99);
console.log(finduserE ? finduserE.name : "User not fond");

const cart = [
  { item: "T-shirt", price: 25 },
  { item: "Shoes", price: 80 },
  { item: "Phone", price: 600 },
  { item: "Laptop", price: 1200 }
];
const findProd = cart.find(elem => elem.price > 100);
console.log(findProd);