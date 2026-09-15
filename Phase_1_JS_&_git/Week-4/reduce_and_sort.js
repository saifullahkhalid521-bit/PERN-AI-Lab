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
const group = users.reduce((acc , user) => {
  if(!acc[user.role]) {
    acc[user.role] = []
}
  acc[user.role].push(user);
  return acc;
},{});
console.log(group);

console.log('Reduce -> Level 1 😊')
const nums = [1 ,2 ,3 ,4 ,5];
const sumOfnums = nums.reduce((acc , cVal) => {
  return acc + cVal;}, 0);
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
  {item: "Laptop" , price: 999}]
const cartPrice = cart.reduce((acc , n) =>{
  return acc + n.price;
},0);
console.log(cartPrice);

const letters = ['a' , 'b' , 'a' , 'c' , 'b' , 'a'];
const countLetters = letters.reduce((acc , l) => {
  // if(acc[l] > 0){
  //   acc[l]+= 1
  // }else{
  //   acc[l] = 1;
  // }
  acc[l] = (acc[l] || 0) + 1;
  return acc;
},{})
console.log(countLetters);

const usersH = [
  {name: "Alice" , score: 80},
  {name: "Bob" , score: 95},
  {name: "Charlie" , score: 88}];
const usersHs = usersH.reduce((acc , s) => {
 return s.score > acc.score ? s : acc
},usersH[0]);
console.log(usersHs);

const usersG = [
  {name: 'A' , role: 'admin'},
  {name: 'B' , role: 'user'},
  {name: 'C' , role: 'admin'},
  {name: 'D' , role: 'user'},];
const usersGroup = usersG.reduce((acc , users) => {
  if(!acc[users.role]){
    acc[users.role] = [];
  }
  acc[users.role].push(users);
  return acc;
}, {});
console.log(usersGroup);


//Level 3
console.log('Level -> 3 🤐');
const numsAvg = [10 , 20 , 30 , 40 , 50];
const calAvg = numsAvg.reduce((acc , n , i) => {
  return (acc + n)
},0) / numsAvg.length;
console.log(calAvg);

const usersA = [
  { name: "A", active: true },
  { name: "B", active: false },
  { name: "C", active: true },
  { name: "D", active: true }
];
const usersActive = usersA.reduce((acc , u) => {
  // if (u.active === true){
  //   acc += 1;
  // }
  // return acc;
  return acc + (u.active?1:0);
},0)
console.log(usersActive);

const usersMap = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];
const usersLmap = usersMap.reduce((acc , n) => {
  if (!acc[n.id]){
    acc[n.id] = n;
  }  
  return acc;
},{});
console.log(usersLmap);

const arrF = [[1 , 2] , [3 , 4], [5 , 6]];
const arrFm = arrF.reduce((acc , a) => {
 return acc.concat(a) ;
},[]);
console.log(arrFm);

const numsEven = [1 , 2 , 3 , 4 , 5 , 6];
const sumNumsEven = numsEven.reduce((acc , n) => {
  return acc + (n % 2 === 0 ? n : 0);
}, 0);
console.log(sumNumsEven);

