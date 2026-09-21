// const fruits = ["apple", "banana", "apple", "cherry", "banana", "apple"];

// const count = fruits.reduce((acc, fruit) => {
//   acc[fruit] = (acc[fruit] || 0)+1;
//   return acc;
// }, {});
// console.log(count);


// const users = [
//   {name: "Alice" ,role: "admin"},
//   {name: "Bob" ,role: "user"},
//   {name: "Charlie" ,role: "admin"},
//   {name: "Dave" ,role: "user"}
// ]
// const group = users.reduce((acc , user) => {
//   if(!acc[user.role]) {
//     acc[user.role] = []
// }
//   acc[user.role].push(user);
//   return acc;
// },{});
// console.log(group);

// console.log('Reduce -> Level 1 😊')
// const nums = [1 ,2 ,3 ,4 ,5];
// const sumOfnums = nums.reduce((acc , cVal) => {
//   return acc + cVal;}, 0);
// console.log(sumOfnums);
// /* 
// 0 + 1 = 1
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
// 10 + 5 = 15
// */

// const numsM = [2 ,3 ,4];
// const numsMr = numsM.reduce((acc , n)=>{
//   return acc * n;
// },1);
// console.log(numsMr);

// const numsMax = [5 ,12 ,8 ,20 ,3];
// const numsMaxR = numsMax.reduce((acc , n)=>{
//  return  acc < n ? n : acc;
  
// }, numsMax[0]);
// console.log(numsMaxR);

// const numMin = [5 ,12 ,8 ,20 ,3];
// const numMinR = numMin.reduce((acc , n)=> {
//   return acc > n ? n : acc;
// }, numMin[0]);
// console.log(numMinR);

// const words = ["Hello" ,"World" ,"from" ,"JS"];
// const wordsJoin = words.reduce((acc , w)=> {
//   return acc?acc + " " + w:w ;
// },"");
// console.log(wordsJoin);

// //Level -> 2
// console.log("Level -> 2😎");

// const cart = [
//   {item: "Book" , price: 15},
//   {item: "Pen" , price: 2},
//   {item: "Laptop" , price: 999}]
// const cartPrice = cart.reduce((acc , n) =>{
//   return acc + n.price;
// },0);
// console.log(cartPrice);

// const letters = ['a' , 'b' , 'a' , 'c' , 'b' , 'a'];
// const countLetters = letters.reduce((acc , l) => {
//   // if(acc[l] > 0){
//   //   acc[l]+= 1
//   // }else{
//   //   acc[l] = 1;
//   // }
//   acc[l] = (acc[l] || 0) + 1;
//   return acc;
// },{})
// console.log(countLetters);

// const usersH = [
//   {name: "Alice" , score: 80},
//   {name: "Bob" , score: 95},
//   {name: "Charlie" , score: 88}];
// const usersHs = usersH.reduce((acc , s) => {
//  return s.score > acc.score ? s : acc
// },usersH[0]);
// console.log(usersHs);

// const usersG = [
//   {name: 'A' , role: 'admin'},
//   {name: 'B' , role: 'user'},
//   {name: 'C' , role: 'admin'},
//   {name: 'D' , role: 'user'},];
// const usersGroup = usersG.reduce((acc , users) => {
//   if(!acc[users.role]){
//     acc[users.role] = [];
//   }
//   acc[users.role].push(users);
//   return acc;
// }, {});
// console.log(usersGroup);


// //Level 3
// console.log('Level -> 3 🤐');
// const numsAvg = [10 , 20 , 30 , 40 , 50];
// const calAvg = numsAvg.reduce((acc , n , i) => {
//   return (acc + n)
// },0) / numsAvg.length;
// console.log(calAvg);

// const usersA = [
//   { name: "A", active: true },
//   { name: "B", active: false },
//   { name: "C", active: true },
//   { name: "D", active: true }
// ];
// const usersActive = usersA.reduce((acc , u) => {
//   // if (u.active === true){
//   //   acc += 1;
//   // }
//   // return acc;
//   return acc + (u.active?1:0);
// },0)
// console.log(usersActive);

// const usersMap = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" }
// ];
// const usersLmap = usersMap.reduce((acc , n) => {
//   if (!acc[n.id]){
//     acc[n.id] = n;
//   }  
//   return acc;
// },{});
// console.log(usersLmap);

// const arrF = [[1 , 2] , [3 , 4], [5 , 6]];
// const arrFm = arrF.reduce((acc , a) => {
//  return acc.concat(a) ;
// },[]);
// console.log(arrFm);

// const numsEven = [1 , 2 , 3 , 4 , 5 , 6];
// const sumNumsEven = numsEven.reduce((acc , n) => {
//   return acc + (n % 2 === 0 ? n : 0);
// }, 0);
// console.log(sumNumsEven);

// //Q15
// const a = [{id: 1 , x: 1}];
// const b = [{id: 2 , x: 2}];
// const ab = a.reduce((acc , n) => {
//  return acc.concat(a , b);
// },[]);
// console.log(ab);

// // console.log([1, 2, 3].reduce((a, b) => a + b));

// const filNre = [1 , 2 , 3 , 4 , 5];
// const filnreR = filNre.reduce((acc , en) => {
//   if(en % 2 === 0){
//     acc.push(en);
//   }
//   return acc;
// }, []);
// console.log(filnreR);

// const mapNre = [1 , 2 , 3];
// const mapNreR = mapNre.reduce((acc , n)=>{
//   acc.push(n*2);
//   // Array.push() array return nahi karta.
// // Woh nayi length return karta hai (number).
//   return acc;
// },[]);
// console.log(mapNreR);

// const sentence = "the cat and the dog and the bird";
// const lele = sentence.split(" ").reduce((acc , l)=>{
//   acc[l] = (acc[l] || 0)+1;
//   return acc;
// },{});
// console.log(lele);

// const arr = [[1 , 2] , [3 , 4] , [5 , [6 , 7]]];
// const deepSum = (arr) =>
//   arr.reduce((acc , item)=> {
//     return acc + (Array.isArray(item) ? deepSum(item) : item);
//   },0);
//   console.log(deepSum(arr));

  
// //practice 
// const n1 = [5, 12, 8, 20, 3];
// const n1S = n1.reduce((acc , n)=>{
//   return acc<n?n:acc;
// },n1[0]);
// console.log(n1S);

// const n2 = [5, 12, 8, 20, 3];
// const n2S = n2.reduce((acc , n)=>{
//   return acc > n ? n : acc;
// },n2[0]);
// console.log(n2S);

// const w1 = ["Hello", "World", "from", "JS"];
// const w1S = w1.reduce((acc , w)=>{
//   return acc +" " + w;
// });
// console.log(w1S);

// const c1 = [
//   { item: "Book", price: 15 },
//   { item: "Pen", price: 2 },
//   { item: "Laptop", price: 999 }
// ];
// const c1s = c1.reduce((acc , s)=>{
//   acc = acc + s.price ;
//   return acc;
// },0)
// console.log(c1s);

// const l1 = ["a", "b", "a", "c", "b", "a"];
// const l1s = l1.reduce((acc , l)=>{
//    acc[l] = (acc[l] || 0)+1;
//    return acc
// },{});
// console.log(l1s);

// const u = [
//   { name: "Alice", score: 80 },
//   { name: "Bob", score: 95 },
//   { name: "Charlie", score: 88 }
// ];
// const uS = u.reduce((acc , hs)=>{
//  return acc.score < hs.score ? hs : acc ;
// }, u[0]);
// console.log(uS);

// const r = [
//   { name: "A", role: "admin" },
//   { name: "B", role: "user" },
//   { name: "C", role: "admin" },
//   { name: "D", role: "user" }
// ];
// const rS = r.reduce((acc , g)=>{
//   if(!acc[g.role]){
//     acc[g.role] = [];
//   }
//   acc[g.role].push(g.name);
//   return acc ;
// },{});
// console.log(rS);

// const av = [10, 20, 30, 40, 50];
// const avS = av.reduce((acc , n)=>{
//  return  acc = acc + n;
// },0)/av.length;
// console.log(avS);

// const usr = [
//   { name: "A", active: true },
//   { name: "B", active: false },
//   { name: "C", active: true },
//   { name: "D", active: true }
// ];
// const usrS = usr.reduce((acc , n)=>{
//  return  acc = acc + (n.active?1:0);
// },0)
// console.log(usrS);

// const u2 = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" }
// ];
// const u2s = u2.reduce((acc , n)=>{
//   if(!acc[n.id]){
//     acc[n.id] = n ;
//   }
//   return acc;
// },{});
// console.log(u2s);

// const a2 = [[1, 2], [3, 4], [5, 6]];
// const a2s = a2.reduce((acc , n)=>{
//  return acc.concat(n);
//  return acc;
// }, []);
// console.log(a2s);

// const n3 =  [1, 2, 3, 4, 5, 6];
// const n3s = n3.filter(elem => elem % 2 === 0).reduce((acc , n)=>{
// return acc = acc + n;
// },0)
// console.log(n3s);

// const a3 = [{ id: 1, x: 1 }];
// const b2 = [{ id: 2, x: 2 }];
// const combine = [a3 , b2].reduce((acc , n)=>{
//   return acc.concat(n);
// },[]);
// console.log(combine);

// console.log([1, 2, 3].reduce((a, b) => a + b));
// console.log([1, 2, 3].reduce((a, b) => a + b, 10));
// console.log([].reduce((a, b) => a + b, 5));
// /*6    ← 1+2+3, no initial → starts at 1
// 16   ← 10+1+2+3, initial = 10
// 5    ← empty array with initial = 5*/


// const arr2 = ["a", "b", "c"];
// const result = arr2.reduce((acc, x, i) => acc + i, 0);
// console.log(result); // ?
// //3

// // Q19
// const n4 = [1 , 2 , 3 , 4 , 5];
// const n4r = n4.reduce((acc , n) => {
// if(n % 2 === 0){
//   acc.push(n);
// }
// return  acc; 
// }, []);
// console.log(n4r);

// const n5 = [1 ,2 , 3];
// const n5r = n5.reduce((acc , n)=> {
//  acc.push(n * 2);
// return acc ;
// },[]);
// console.log(n5r);

// const senN = "the cat and the dog and the bird";
// const senR = senN.split(" ").reduce((acc , n) => {
//   acc[n] = (acc[n] || 0)+1;
//   return acc;
// },{});
// console.log(senR);

/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */

//Sort()

const numbersS = [45, 12, 89, 3, 27, 64];
const sNumbers = numbersS.sort((a , b) => {
  return a - b ;
});
console.log(sNumbers);

/*a - b < 0 phale a
  a - b > 0 phale b*/

const studentsS = [
  { name: "Saif", marks: 72 },
  { name: "Robot", marks: 91 },
  { name: "Ego", marks: 65 },
  { name: "Khalid", marks: 84 }
];
const studentsSor = studentsS.sort((a , b)=>{
  return b.marks - a.marks ;
})
console.log(studentsSor);

const w3 = ["Banana", "apple", "Cherry"];
w3.sort((a ,b) => {
  return a.toLowerCase().localeCompare(b.toLowerCase());
})
console.log(w3);

const u3 = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 }
];
u3.sort((a , b) =>{
  return a.name.localeCompare(b.name) || a.age - b.age;
});
console.log(u3);
//The trick: || means "if the first comparison is 0 (equal), fall through to the next."

const w4 = [ "Cherry", "banana", "apple", "fig", "kiwi",];
w4.sort((a , b)=>{
 return a.length - b.length || a.toLowerCase().localeCompare(b.toLowerCase);
});
console.log(w4);

//Level --> 1
console.log('Level -> 1 😊');
const n6 = [40 ,100 , 1 ,5 , 25 ,10];
n6.sort((a , b) => {
  return a - b ;
})
console.log(n6);

const n7 = [40 ,100 ,1 ,5 ,25 ,10];
n7.sort((a ,b) => {
  return b - a;
})
console.log(n7);

const f = ["banana" , "apple" , "cherry" , "data"];
const fsorted = [...f].sort();
console.log(f);
console.log(fsorted);

const w5 = ["banana" , "apple" , "fig" , "kiwi" , "cherry"];
const sortedw5 = [...w5].sort((a , b) => a.length - b.length);
console.log(sortedw5)
console.log(w5)

const w6 = ["banana" , "apple" , "fig" , "kiwi" , "cherry"];
const sortedw6 = [...w6].sort((a ,b) => b.length - a.length);
console.log(w6)
console.log(sortedw6)

//Level -> 2 
console.log('Level -> 2😎');

const u4 = [
  {name: "Charlie" , age: 30},
  {name: "Alice" , age: 25},
  {name: "Bob" , age: 35}
];
const sortedU4 = [...u4].sort((a ,b) => a.age - b.age);
console.log(sortedU4);

const p1 = [
  {name: "Book" , price:15},
  {name: "Laptop" , price:999},
  {name: "Pen" , price:2},
];
const sortP1 = [...p1].sort((a ,b) => b.price - a.price);
console.log(sortP1);

const u6 = [
  {name: "Charlie" , age:30},
  {name: "alice" , age:25},
  {name: "Bob" , age:35},
];
const sortU6 = [...u6].sort((a , b) => {
  return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
})
console.log(sortU6);

const u7 = [
  {name: "Alice" , age:30},
  {name: "Bob" , age:25},
  {name: "Alice" , age: 25},
  {name: "Bob" , age:30}
];
const sortU7 = [...u7].sort((a ,b) => {
  return a.name.toLowerCase().localeCompare(b.name.toLowerCase()) || a.age - b.age;
})
console.log(sortU7);

//Level -> 3
console.log("Level -> 3 🤐");
const emails = [
  {subject: "A" , read: true},
  {subject: "B" , read: false},
  {subject: "C" , read: true},
  {subject: "D" , read: false},
]
const sortEmail = [...emails].sort((a ,b) => {
  return a.read - b.read;
});
console.log(sortEmail);

const s1 = [
  {name: "Sam" , score: 85},
  {name: "Rita" , score: 92},
  {name: "Tom" , score: 85},
  {name: "Zara" , score: 92}
]
const sortS1 = [...s1].sort((a ,b) => {
  // return a.name.toLowerCase().localeCompare(b.name.toLowerCase()) && b.score - a.score ;
  return b.score - a.score || a.name.toLowerCase().localeCompare(b.name.toLowerCase());
});
console.log(sortS1);

const p2 = [
  {name: 'A' , price: 50 , inStock: false},
  {name: 'B' , price: 20 , inStock: true},
  {name: 'C' , price: 10 , inStock: true},
  {name: 'D' , price: 30 , inStock: false},
];
const sortP2 = [...p2].sort((a , b) => {
  return b.inStock - a.inStock || a.price - b.price;
})
console.log(sortP2);

const dates = ["2023-05-15", "2022-01-01", "2024-12-31", "2023-01-01"];
const sortDate = [...dates].sort((a , b) => new Date(a) - new Date(b));
console.log(sortDate);

//Level -> 4
console.log("Level -> 4 😈");

const n8 = [10 ,1 ,5 ,100 ,25];
n8.sort();
console.log(n8);

const arr3 = [3 , 1 , 2];
const result2 = arr3.sort();
console.log(arr3);
console.log(result2);
console.log(arr3 === result2);

const w7 = ["banana" , "Apple" , "cherry" , "Date" , "avocado"];
const sortw7 = [...w7].sort((a , b) => {
  return a.toLowerCase().localeCompare(b.toLowerCase());
}); 
console.log(sortw7);

const n9 = ['10' , '2' , '30' , '1' , '5'];
const sortN9 = [...n9].sort((a , b) => {
  return Number(a) - Number(b);
});
console.log(sortN9);

const n10 = [5, 12, 8, 130, 44, 3, 20];

const result3 = n10
  .filter(n => n > 10)
  .sort((a, b) => a - b);

console.log(result3);
console.log(n10);

const n11 = [1 , 2 , 3 , 4 , 5 , 6];
const sortN11 = [...n11].sort((a , b) => {
  return a - b; 
});
const result4 = [];
while (sortN11.length){
  result4.push(sortN11.pop()); // largest
  if (sortN11.length){
    result4.push(sortN11.shift()); // smallest
  }
}
console.log(result4);

// Bonus -> questions 
console.log('Bonus questions 🫠');
const posts = [
  { id: 1, title: "First Post", createdAt: "2026-03-15T10:30:00Z" },
  { id: 2, title: "Second Post", createdAt: "2026-09-01T14:20:00Z" },
  { id: 3, title: "Third Post", createdAt: "2026-01-10T08:15:00Z" },
  { id: 4, title: "Fourth Post", createdAt: "2026-06-22T19:45:00Z" }
];
const sortPosts = [...posts].sort((a , b) => {
  return new Date(b.createdAt) - new Date(a.createdAt);
})
console.log(sortPosts);

const countries = [
  { name: "Brazil", population: 216422446 },
  { name: "India", population: 1428627663 },
  { name: "Japan", population: 123294513 },
  { name: "United States", population: 339996563 },
  { name: "Nigeria", population: 223804632 }
];
const sortCountries = [...countries].sort((a , b) => {
  return b.population - a.population;
})
console.log(sortCountries);

const playlist = [
  { title: "Blinding Lights", artist: "The Weeknd" },
  { title: "Shape of You", artist: "Ed Sheeran" },
  { title: "Starboy", artist: "The Weeknd" },
  { title: "Perfect", artist: "Ed Sheeran" },
  { title: "Bad Habits", artist: "Ed Sheeran" }
];
const sortPlaylist = [...playlist].sort((a , b) => {
  return a.artist.toLowerCase().localeCompare(b.artist.toLowerCase()) || a.title.toLowerCase().localeCompare(b.title.toLowerCase());
})
console.log(sortPlaylist);

const studentGrades = [
  { student: "Alice", grade: "B" },
  { student: "Bob", grade: "A+" },
  { student: "Charlie", grade: "B+" },
  { student: "David", grade: "A" },
  { student: "Eve", grade: "F" }
];
// 1. Define rank order (lower number = higher rank)
const gradeRank = {
  "A+": 1,
  "A": 2,
  "B+": 3,
  "B": 4,
  "F": 5
};
// 2. Compare numeric values instead of strings
const sortStudentGrades = [...studentGrades].sort((a, b) => {
  return gradeRank[a.grade] - gradeRank[b.grade];
});
console.log(sortStudentGrades);

const products = [
  { name: "Wireless Earbuds", rating: 4.5, reviews: 1200 },
  { name: "Gaming Mouse", rating: 4.8, reviews: 850 },
  { name: "Mechanical Keyboard", rating: 4.5, reviews: 3400 },
  { name: "USB-C Hub", rating: 4.2, reviews: 500 },
  { name: "4K Monitor", rating: 4.8, reviews: 2100 }
];
const sortProducts = [...products].sort((a , b) => {
  return b.rating - a.rating || b.reviews - a.reviews
})
console.log(sortProducts);

const w8 = ["rhythm", "beautiful", "cat", "queue", "apple", "synergy", "education"];
const countVowels = (str) => (str.match(/[aeiou]/gi) || []).length;
const sortW8 = [...w8].sort((a , b) => {
  return countVowels(a) - countVowels(b);
})
console.log(sortW8);

const u8 = [
  { id: 101, name: "Alice", address: { city: "Tokyo", zip: "100-0001" } },
  { id: 102, name: "Bob", address: { city: "Amsterdam", zip: "1012" } },
  { id: 103, name: "Charlie", address: { city: "New York", zip: "10001" } },
  { id: 104, name: "David", address: { city: "Berlin", zip: "10115" } }
];
const sortU8 = [...u8].sort((a , b)=>{
  return a.address.city.toLowerCase().localeCompare(b.address.city.toLowerCase());
})
console.log(sortU8);

const items = [
  { name: "Item A", category: "Electronics", originalIndex: 0 },
  { name: "Item B", category: "Books",       originalIndex: 1 },
  { name: "Item C", category: "Electronics", originalIndex: 2 },
  { name: "Item D", category: "Books",       originalIndex: 3 },
  { name: "Item E", category: "Electronics", originalIndex: 4 }
];
const sortItems = [...items].sort((a , b)=> {
  return a.category.toLowerCase().localeCompare(b.category.toLowerCase()) || a.originalIndex - b.originalIndex;
})
console.log(sortItems);

const aajkaArr = [1 , 2 , 3 , 4 , 5];
const reAajKaArr = aajkaArr.reduce((acc , n)=>{
 return acc = acc + n;
},0);
console.log(reAajKaArr);

const shAajKaArr = [...aajkaArr];
shAajKaArr.sort((a , b)=>{
  return b - a;
});
console.log(shAajKaArr);