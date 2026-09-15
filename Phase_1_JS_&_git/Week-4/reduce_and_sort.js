const fruits = ["apple", "banana", "apple", "cherry", "banana", "apple"];

const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0)+1;
  return acc;
}, {});

console.log(count);


const users = [
  {name: "Alice" ,role: "admin"},
  {name: "Bob" ,role: "user"},
  {name: "Charlie" ,role: "admin"},
  {name: "Dave" ,role: "user"}
]
const groupd = users.reduce((acc , user) => {
  if (!acc[user.role]){
    acc[user.role] = [];
  }
  acc[user.role].push(user);
  return acc;
}, {});
console.log(groupd);

console.log('Reduce -> Level 1 😊')
const nums = [1 ,2 ,3 ,4 ,5];
const sumOfnums = nums.reduce((acc , cVal) => {
  return acc + cVal;
}, 0);
console.log(sumOfnums);
/* 
0 + 1 = 1
1 + 2 = 3
3 + 3 = 6
6 + 4 = 10
10 + 5 = 15
*/

const numsM = [2 ,3 ,4];
const numsMr = numsM.reduce((acc , n)=>{
  return acc * n;
},1);
console.log(numsMr);

const numsMax = [5 ,12 ,8 ,20 ,3];
const numsMaxR = numsMax.reduce((acc , n)=>{
 return  acc < n ? n : acc;
  
}, numsMax[0]);
console.log(numsMaxR);

const numMin = [5 ,12 ,8 ,20 ,3];
const numMinR = numMin.reduce((acc , n)=> {
  return acc > n ? n : acc;
}, numMin[0]);
console.log(numMinR);

const words = ["Hello" ,"World" ,"from" ,"JS"];
const wordsJoin = words.reduce((acc , w)=> {
  return acc?acc + " " + w:w ;
},"");
console.log(wordsJoin);

//Level -> 2
console.log("Level -> 2😎");

const cart = [
  {item: "Book" , price: 15},
  {item: "Pen" , price: 2},
  {item: "Laptop" , price: 999}
]
const cartPrice = cart.reduce((acc , n) =>{
  return acc + n.price;
},0);
console.log(cartPrice);

const letters =["a" ,"b" ,"a" ,"c" ,"b" ,"a"];
const lettersCount = letters.reduce((acc , n) => {
  acc[n] = (acc[n] || 0)+1;
  return acc;
},{})
console.log(lettersCount);