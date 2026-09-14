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


//some() method
//level 1
const numb = [5 ,20 , 150 ,8 ,90];
const someNumb = numb.some(elem => elem > 100);
console.log(someNumb);

const wordsS = ['cat' , 'dog' , 'elephant' ,'ant'];
const wordsSome = wordsS.some(elem => elem.length > 6);
console.log(wordsSome);

const arr = [1 ,2 ,'hello', null , 5];
const someArr = arr.some(elem => elem === null);
console.log(someArr);

const numbsN = [3 , 7 ,11 ,2 ,8];
const sNumbsN = numbsN.some(elem => elem < 0);
console.log(sNumbsN);

//level 2
const usersEig = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 16 },
  { name: "Charlie", age: 30 }
];
const someUser = usersEig.some(elem => elem.age < 18);
console.log(someUser);

const product = [
  { name: "Book", inStock: true },
  { name: "Pen", inStock: true },
  { name: "Laptop", inStock: false }
];
const somePro = product.some(elem => !elem.inStock);
console.log(somePro);

const user = [
  { name: "A", role: "admin", active: false },
  { name: "B", role: "user", active: true },
  { name: "C", role: "admin", active: true }
];
const someUsers = user.some(elem => elem.role === 'admin' && elem.active);
console.log(someUser);

//Level 3
console.log("Level 3 😈");
const fields = ['john' , 'doe' , "john@example.com" , ""];
const fieldsVal = fields.some(elem => elem === "");
console.log(fieldsVal);

const cartS = [
  {item: "T-shirt" , price: 25},
  {item: "Shoes" , price: 80},
  {item: "Laptop" , price: 1200},
]
const checkCart = cartS.some(elem => elem.price > 1000);
console.log(checkCart);

const userRoles = ["editor" , "viewer"];
const neededRoles = ["admin" , "editor"];
const permissionCheck = userRoles.some(elem => neededRoles.includes(elem));
console.log(permissionCheck);


//Level 4 
console.log('level 4🤐')
console.log([].some(() => true));
console.log([].some(() => false));
console.log([1, 2, 3].some(n => n > 3));
/*false   ← empty array always returns false
false   ← empty array always returns false
false   ← no element > 3*/

const namesJ = ["Alice" , "Bob" , "John" , "Jane"];
const namesJcheck = namesJ.some(elem => elem.toLowerCase().startsWith('j'));
console.log(namesJcheck);

//Bones questions
const pSquare = [2 , 3 ,8 , 9 , 10];
const checkPsquare = pSquare.some(elem => Math.sqrt(elem));
console.log(checkPsquare);

const letter = ['apple' , 'banana' , 'pizza'];
const checkZ = letter.some(elem => elem.includes('z'));
console.log(checkZ);

const date = [
  "2026-10-15", // Future date
  "2026-11-01", // Future date
  "2024-03-20", // Past date 1
  "2026-12-25", // Future date
  "2025-08-05"  // Past date 2
];
const todayC = new Date(); 
const pastDataCheck = date.some(elem => new Date(elem) < todayC);
console.log(pastDataCheck);

const duplicate = [1 , 2 ,3 , 2 ,4];
const checkDulpi = duplicate.some((elem , i) => duplicate.indexOf(elem)!== i);
console.log(checkDulpi);

const emails = [
  "alex.smith@gmail.com",
  "invalid.user.yahoo.com", // Missing @ symbol 1
  "contact@company.org",
  "user.nameatdomain.com",  // Missing @ symbol 2
  "support@service.io"
];
const checkEmails = emails.some(elem => !elem.includes('@'));
console.log("✅😊")
console.log(checkEmails);


//every()
console.log('level 1 👍');
const numsE = [1 , 2 , 3 , 4 , 5];
const numsEv = numsE.every(elem => elem > 0);
console.log(numsEv);

const wordsE = ["apple" , "banana" , "cat" , "dog"];
const wordsEv = wordsE.every(elem => elem.length > 3);
console.log(wordsEv);

const arrE = ["hello" , "world" ,"js"];
const arrEv =arrE.every(elem => typeof elem === "string");
console.log(arrEv);

const numsE2 = [2 , 4 , 6 , 7 , 8];
const numsEv2 = numsE2.every(elem => elem % 2 === 0);
console.log(numsEv2);

console.log("Level 2😎");
const usersE18 = [
  {name: "Alice" , age: 25},
  {name: "Bob" , age: 17},
  {name: "Charlie" , age: 30}
]
const usersEv18 = usersE18.every(elem => elem.age >= 18);
console.log(usersEv18);

const productsE = [
  {name: "Book" ,inStock: true},
  {name: "Pen" ,inStock: true},
  {name: "Laptop" ,inStock: true}
];
const productsEv = productsE.every(elem => elem.inStock);
console.log(productsEv);

const usersErole = [
  {name: "A" , role: "admin"},
  {name: "B" , role: "user"},
  {name: "C" , role: ""}
]
const usersEVrole = usersErole.every(elem => elem.role.trim() !== "");
console.log(usersEVrole);


console.log("Level 3 🤐");

const fieldsE = ["john" , "doe" , "john@example.com"];
const fieldsEv = fieldsE.every(elem => elem.trim() !== "");
console.log(fieldsEv);

const cartE = [
  {item: "T-shirt" , price: 25},
  {item: "Shoes" , price: 80},
  {item: "Laptop" , price: 1200}
]
const cartEv = cartE.every(elem => elem.price < 1000);
console.log(cartEv);

const userRolesE = ["admin" , "editor" , "viewer"];
const neededRolesE = ["admin" , "editor"];
const neededRolesEv = neededRolesE.every(elem => userRolesE.includes(elem));
console.log(neededRolesEv);


console.log("Level 4 😈");

console.log([].every(() => false));
console.log([].every(() => true));
console.log([1, 2, 3].every(n => n > 0));
/*true    ← empty array → always true
true    ← empty array → always true
true    ← all positive */

const numsEc = [2, 4, 5, 6, 8];
numsEc.every(n => {
  console.log("checking", n);
  return n % 2 === 0;
});
/*checking 2
checking 4
checking 5 */

const emailsE = [
  "a@test.com" , "b@test.com" , "invalid-email" , "c@test.com"
]
const emailsEv = emailsE.every(elem => elem.includes("@"))
console.log(emailsEv);

const numsRefac = [2 , 4 , 6 , 8];
let allEven = true;
for (let i = 0; i<numsRefac.length ; i++){
  if(numsRefac[i] % 2 !== 0){
    allEven = false;
    break;
  }
}
console.log(allEven);

const numsRefac2 = [2 , 4 , 6 , 8];
const numsRefacV = numsRefac2.every(elem => elem % 2 === 0);
console.log(numsRefacV);


console.log("Bonus Qs 🫡");
const numPs = [1 ,4 ,9 ,16];
const numPsV = numPs.every(elem => Math.sqrt(elem));
console.log(numPsV);

const wordE = ["cat" ,'bee' , 'apple']
const wordEv = wordE.every(elem => elem.includes('a'));
console.log(wordEv);

const productUnH = [
  {name: 'Water-bottle', inStock: true , price: 40},
  {name: 'Note-Book', inStock: true , price: 20},
  {name: 'T-shirt', inStock: true , price: 60},
  {name: 'Table', inStock: true , price: 90},
]
const productUnHV = productUnH.every(elem => elem.price < 100 && elem.inStock);
console.log(productUnHV);

const nullE = [
  {},{},null
]
const nullEv = nullE.every(elem => elem === null);
console.log(nullEv);

const dateE = [
  "2026-03-15", 
  "2026-01-01", 
  "2024-03-20", 
  "2026-02-15", 
  "2025-08-05"  
];
const aaj = new Date();
const dateEv = dateE.every(elem => new Date(elem) < aaj);
console.log(dateEv);

