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

//Level 4
const numsU = [1, 2, 3, 4, 5];
const result = numsU.find(n => n > 10);
console.log(result);
console.log(numsU.find(n => n === 3));
console.log(numsU.find(n => n === 99));
/* undefined   ← nothing > 10
3           ← found 3
undefined   ← 99 not in array*/

const numsF = [4, 8, 15, 16, 23, 42];
console.log(numsF.filter(n => n > 10));
console.log(numsF.find(n => n > 10));
/* in filter it will return [15 , 16 , 23 , 42]
in find it will return only 15*/

const numsG = [2 , 4 , 6 , 8 , 10 , 3 , 12];
const findNumsG = numsG.find(elem => elem>5 && elem % 2 === 0);
console.log(findNumsG);

const fruits = ["apple", "banana", "cherry", "date"];
const findFruit = fruits.findIndex(elem => elem === 'cherry');
console.log(findFruit);

//Bonus questions
const usersM = [
  { name: "Alice", email: "alice@yahoo.com" },
  { name: "Bob", email: "bob@gmail.com" },
  { name: "Charlie", email: "charlie@gmail.com" }
];
const findGmail = usersM.find(elem => elem.email.endsWith('@gmail.com'));
//use endsWith() method
console.log(findGmail);

const dupli = [1 , 2 , 3 , 4 , 2 , 5];
const findDupli = dupli.find((elem , i) => dupli.indexOf(elem) !== i);
console.log(findDupli);

const nullVal = [1, "a", null, 4, null];
const findNull = nullVal.find((elem ,i) => elem === null);
console.log(findNull);

const dates = [
  "2023-05-15",
  "2025-12-01",
  "2026-08-10",
  "2027-09-15",
  "2026-10-25",
];
const today = new Date();
const findNextDate = dates.find(elem => new Date(elem) > today);
console.log(findNextDate);

const usersC = [
  { id: 1, name: "Alexander" },
  { id: 2, name: "Zachary" },
  { id: 3, name: "Elizabeth" },
  { id: 4, name: "AZIZ" },
  { id: 5, name: "Sarah" }
];
const findUserContain = usersC.find(elem => elem.name.toLowerCase().includes('z'));
console.log(findUserContain);