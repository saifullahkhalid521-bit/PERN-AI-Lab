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

//Q15
const a = [{id: 1 , x: 1}];
const b = [{id: 2 , x: 2}];
const ab = a.reduce((acc , n) => {
 return acc.concat(a , b);
},[]);
console.log(ab);

// console.log([1, 2, 3].reduce((a, b) => a + b));

const filNre = [1 , 2 , 3 , 4 , 5];
const filnreR = filNre.reduce((acc , en) => {
  if(en % 2 === 0){
    acc.push(en);
  }
  return acc;
}, []);
console.log(filnreR);

const mapNre = [1 , 2 , 3];
const mapNreR = mapNre.reduce((acc , n)=>{
  acc.push(n*2);
  // Array.push() array return nahi karta.
// Woh nayi length return karta hai (number).
  return acc;
},[]);
console.log(mapNreR);

const sentence = "the cat and the dog and the bird";
const lele = sentence.split(" ").reduce((acc , l)=>{
  acc[l] = (acc[l] || 0)+1;
  return acc;
},{});
console.log(lele);

const arr = [[1 , 2] , [3 , 4] , [5 , [6 , 7]]];
const deepSum = (arr) =>
  arr.reduce((acc , item)=> {
    return acc + (Array.isArray(item) ? deepSum(item) : item);
  },0);
  console.log(deepSum(arr));

  
//practice 
const n1 = [5, 12, 8, 20, 3];
const n1S = n1.reduce((acc , n)=>{
  return acc<n?n:acc;
},n1[0]);
console.log(n1S);

const n2 = [5, 12, 8, 20, 3];
const n2S = n2.reduce((acc , n)=>{
  return acc > n ? n : acc;
},n2[0]);
console.log(n2S);

const w1 = ["Hello", "World", "from", "JS"];
const w1S = w1.reduce((acc , w)=>{
  return acc +" " + w;
});
console.log(w1S);

const c1 = [
  { item: "Book", price: 15 },
  { item: "Pen", price: 2 },
  { item: "Laptop", price: 999 }
];
const c1s = c1.reduce((acc , s)=>{
  acc = acc + s.price ;
  return acc;
},0)
console.log(c1s);

const l1 = ["a", "b", "a", "c", "b", "a"];
const l1s = l1.reduce((acc , l)=>{
   acc[l] = (acc[l] || 0)+1;
   return acc
},{});
console.log(l1s);

const u = [
  { name: "Alice", score: 80 },
  { name: "Bob", score: 95 },
  { name: "Charlie", score: 88 }
];
const uS = u.reduce((acc , hs)=>{
 return acc.score < hs.score ? hs : acc ;
}, u[0]);
console.log(uS);

const r = [
  { name: "A", role: "admin" },
  { name: "B", role: "user" },
  { name: "C", role: "admin" },
  { name: "D", role: "user" }
];
const rS = r.reduce((acc , g)=>{
  if(!acc[g.role]){
    acc[g.role] = [];
  }
  acc[g.role].push(g.name);
  return acc ;
},{});
console.log(rS);

const av = [10, 20, 30, 40, 50];
const avS = av.reduce((acc , n)=>{
 return  acc = acc + n;
},0)/av.length;
console.log(avS);

const usr = [
  { name: "A", active: true },
  { name: "B", active: false },
  { name: "C", active: true },
  { name: "D", active: true }
];
const usrS = usr.reduce((acc , n)=>{
 return  acc = acc + (n.active?1:0);
},0)
console.log(usrS);

const u2 = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];
const u2s = u2.reduce((acc , n)=>{
  if(!acc[n.id]){
    acc[n.id] = n ;
  }
  return acc;
},{});
console.log(u2s);

const a2 = [[1, 2], [3, 4], [5, 6]];
const a2s = a2.reduce((acc , n)=>{
 return acc.concat(n);
 return acc;
}, []);
console.log(a2s);

const n3 =  [1, 2, 3, 4, 5, 6];
const n3s = n3.filter(elem => elem % 2 === 0).reduce((acc , n)=>{
return acc = acc + n;
},0)
console.log(n3s);

const a3 = [{ id: 1, x: 1 }];
const b2 = [{ id: 2, x: 2 }];
const combine = [a3 , b2].reduce((acc , n)=>{
  return acc.concat(n);
},[]);
console.log(combine);

console.log([1, 2, 3].reduce((a, b) => a + b));
console.log([1, 2, 3].reduce((a, b) => a + b, 10));
console.log([].reduce((a, b) => a + b, 5));
/*6    ← 1+2+3, no initial → starts at 1
16   ← 10+1+2+3, initial = 10
5    ← empty array with initial = 5*/


const arr2 = ["a", "b", "c"];
const result = arr2.reduce((acc, x, i) => acc + i, 0);
console.log(result); // ?
//3

// Q19
const n4 = [1 , 2 , 3 , 4 , 5];
const n4r = n4.reduce((acc , n) => {
if(n % 2 === 0){
  acc.push(n);
}
return  acc; 
}, []);
console.log(n4r);

const n5 = [1 ,2 , 3];
const n5r = n5.reduce((acc , n)=> {
 acc.push(n * 2);
return acc ;
},[]);
console.log(n5r);

const senN = "the cat and the dog and the bird";
const senR = senN.split(" ").reduce((acc , n) => {
  acc[n] = (acc[n] || 0)+1;
  return acc;
},{});
console.log(senR);
