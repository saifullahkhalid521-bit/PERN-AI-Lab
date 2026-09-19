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