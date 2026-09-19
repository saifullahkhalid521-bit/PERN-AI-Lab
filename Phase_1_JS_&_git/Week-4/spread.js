console.log(`Hello let's start with spread Operator🤏`)

const nums = [1 , 2 , 3];
console.log(nums);
console.log(...nums);

const a =[ 1 , 2 , 3];
const b = [...a];
b.push(4);
console.log(a);
console.log(b);

//merging arrays
// without spread
const a1 = [1 , 2];
const b1 = [3 , 4];
const merged = a1.concat(b1);
console.log(merged);

//with spread
const merged1 = [...a1 ,99, ...b1];
console.log(merged1);

//passing array items as function arguments
const nums2 = [5 , 2 , 9];
console.log(Math.max(...nums2));
console.log(Math.max(nums2));

const user = {name: "khalid" , age: 21};
const copy = {...user};
copy.age = 30;
console.log(copy.age);
console.log(user.age);

const a2 = {x:1 , y:2};
const b2 = {y:3 , z:4};
// const merged2 = Object.assign({} , a2 , b2);
const merged2 = {...a2 , ...b2};
// Later keys override earlier ones
console.log(merged2);

const user1 = { name: "Alice", age: 25, city: "NYC" };
const updated = {...user1 , age:30};
console.log(updated); // { name: "Alice", age: 30, city: "NYC" }
console.log(user1);

const word = "hello";
const chars = [...word];
console.log(chars);

const reversed = [...word].reverse().join("");
console.log(reversed);

const set = new Set ([1 , 2 , 2 , 3 , 3]);
const arr = [...set];
console.log(arr);
const map = new Map([['a' , 1] , ['b' , 2]]);
console.log([...map]);

const arr1 = [1 , 2 , 3];
const withEnd = [...arr1 , 4];
console.log(withEnd);

const withStart = [0 , ...arr1];
console.log(withStart);

const mid = [...arr1.slice(0 , 1) , 99 , ...arr1.slice(1)];
console.log(mid);
const mid2 = [...arr1.slice(0 , 3) , 100 , ...arr1.slice(3)];
console.log(mid2);

// const Obj = {name: 'saif' , roll: 'dev' , city: "Ranchi"};
// const Objsp = {...Obj};
// console.log(Objsp);

const user2 = { name: "Alice", address: { city: "NYC" } };
const copy2 = { ...user2 };

copy2.address.city = "LA";
console.log(user2.address.city); 
// For deep copies, use structuredClone() (modern) or a library.

const a3 = [1 , 2 ];
const b3 = null;
const result = [...a3 , ...(b3 || [])];
console.log([...a3 , ...[]]);
// [...null]

const obj = { a: 1, b: 2 };
// [...obj]  ❌ TypeError — object is not iterable
// But this works (extracts values):
Object.values(obj); // [1, 2]
// Or keys:
[...Object.keys(obj)]; // ["a", "b"]

//Level -> 1
console.log('Level -> one😟');
const a4 = [1, 2 , 3];
const b4 = [...a4];
b4.push(4);
console.log(a4)
console.log(b4);

const a5 = [1 , 2];
const b5 = [3 , 4];
const merge = [...a5 , ...b5];
console.log(merge);

const nums3 = [5 , 2 , 9 , 1 , 7];
console.log(Math.max(...nums3));

const user3 = {name: "Khalid" , age:23};
const user3Copy = {...user3};
user3Copy['role'] = 'dev';
console.log(user3Copy);
console.log(user3);

const a6 = {x:1 , y:2};
const b6 = {y:3 , z:4};
const merge1 = {...a6 , ...b6};
console.log(merge1);


//Level 2
console.log("Level -> 2😖");

const arr2 = [1 , 2 , 3];
const arr2Copy = [...arr2.slice(0 , 3) , 4 , ...arr2.slice(3)];
console.log(arr2Copy);

const arr3 = [1 , 2 , 3];
const arr3Copy = [ 0 ,...arr3 ];
console.log(arr3Copy);

const user4 = {name: "Robot" , age:25 ,city: "Ranchi"};
const user4Copy = {...user4 , age : 30};
console.log(user4);
console.log(user4Copy);

const word1 = "hello";
const word1Copy  = [...word1];
console.log(word1Copy);

const a7 = [1 , 2];
const b7 = [5 , 6];
const mrga7b7 = [...a7 , 3, 4 , ...b7];
console.log(mrga7b7);

//Level -> 3
console.log('Level -> 3🤨');
const nums4 = [1 , 2 , 2 , 3 , 3 , 4];
const nums4Copy = [...new Set(nums4)];
console.log(nums4Copy); 

const todos = ['buy milk' , 'walk dog'];
const todosCopy = [...todos , 'read book'];
console.log(todosCopy);
console.log(todos);

const state1 = {
  user: {name: "Alice"},
  theme: "light"
};
const stateUpdate = {...state1};
stateUpdate.theme = 'dark';
console.log(stateUpdate);

const defaults = {theme: "light" , font: '16px' , notifications: true};
const userPrefs = {theme: "dark" , notifications:false};
const mrgDefaWithUser  = {...defaults , ...userPrefs};
console.log(mrgDefaWithUser);

const word2 = "hello";
const word2Copy = [...word2].reverse().join('');
console.log(word2Copy);

//Level -> 4
console.log('Level -> 4🙃');

const a8 = [1, 2];
const b8 = a8;
const c8 = [...a8];
b8.push(3);
c8.push(4);
console.log(a8, b8, c8);

const a9 = { x: 1 };
const b9 = { ...a9, x: 2, y: 3 };
console.log(a9, b9);

const obj1 = { a: 1, b: 2 };
// const arr = [...obj1];
const arr4 = Object.values(obj1); // [1, 2]
console.log(arr4);

const user5 = { name: "Alice", address: { city: "NYC" } };
const copy4 = { ...user5 };
// const deepCopy = structuredClone(user5); // or JSON.parse(JSON.stringify(user))
copy4.address.city = "LA";
console.log(user5.address.city);

const a10 = [1, 2, 3];
const b10 = [0, ...a, 4];
console.log(b10.length);
console.log(b10);

const c10 = [...a10, ...a10];
console.log(c10);

function add(a , b , c){
  return a+b+c;
}
const nums5 = [1 , 2 , 3];
console.log(add(...nums5));

//Bonus 
console.log('Bonus -> 😈');

const fruits = ["Apple", "Banana"];
const vegetables = ["Carrot", "Spinach"];
const grains = ["Rice", "Oats"];
const meg3 = [...fruits , ...vegetables , ...grains];
console.log(meg3);

const userProfile = {
  id: 101,
  info: {
    name: "Alex",
    preferences: {
      theme: "dark",
      notifications: true
    }}};
const userProfileDeepCopy = structuredClone(userProfile);
userProfileDeepCopy.info.preferences.theme = 'Light';
console.log(userProfileDeepCopy);

const defaultConfig = {
  theme: "light",
  fontSize: 14,
  showSidebar: true,
  language: "en"
};
const userSettings = {
  theme: "dark",
  fontSize: 18
  // showSidebar and language are omitted
};
const combDefaulUser = {...defaultConfig , ...userSettings};
console.log(combDefaulUser);

const arr2D = [[1 , 2], [3 , 4]];
const flettened = arr2D.reduce((acc , elem) => {
  return [...acc , ...elem]
},[]);
console.log(flettened);

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 1, name: "Alice (Duplicate)" },
  { id: 3, name: "Charlie" },
  { id: 2, name: "Bob (Duplicate)" }
];
// 1. Get unique IDs using Set + spread
const uniqueIds = [...new Set(users.map(u => u.id))];
// 2. Map each unique ID back to its first matching object
const uniqueUsers = uniqueIds.map(id => users.find(u => u.id === id));
console.log(uniqueUsers);
// console.log(uniqueIds);