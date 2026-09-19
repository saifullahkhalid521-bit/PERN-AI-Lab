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