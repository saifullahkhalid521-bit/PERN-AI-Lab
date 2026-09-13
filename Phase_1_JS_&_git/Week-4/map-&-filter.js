const dates = ["2024-1-10" , "2025-2-20" , "2026-3-30"];
const formattedDates = dates.map(formatDates);

console.log(formattedDates);

function formatDates(element){
  const parts = element.split("-");
  return `${parts[1]}/${parts[2]}/${parts[0]}`;
}

const number = [1 ,2 , 3 ,4 ,5];
const double = number.map((elem)=>{
  return elem * 2;
});
console.log(double);
//OR
const Numbers = [2 , 4 , 6 , 8 , 10];
const Double = Numbers.map(square);
function square (elem) {
  return elem * 2;
}
console.log(Double);

const names = ['saif' , 'robot' , 'ego' , 'khalid'];
const namesUpper = names.map((elem)=>{
  return elem.toUpperCase();
});
console.log(namesUpper);


const lele = (elem) =>{
  return elem.toUpperCase();
}
// function lele (elem){
//   return elem.toUpperCase();
// }
const nameUpM = names.map(lele);
console.log(nameUpM);


const numbers = [5 , 10 ,15 , 20];
const squares = numbers.map((elem)=>{
  return elem * 2 ;
});
console.log(squares);

const namesHai = ['saif' , 'robot' , 'ego'];
const nameUpperCase = namesHai.map((elem)=>{
  return elem.toUpperCase();
});
console.log(nameUpperCase);

const prices = [100 , 200 , 300 , 400];
const gstPrices = prices.map((elem)=>{
  return elem + (elem * 0.18);
})
console.log(gstPrices);

const fruits = ["Apple", "Mango", "Banana" , "Orange"];
const indexFruits = fruits.map((elem , index)=>{
  return `${index+1} - ${elem}`;
})
console.log(indexFruits);

const students = [
  {name: 'Saif', marks: 85},
  {name: 'Robot', marks: 72},
  {name: 'Ego', marks: 91},
  {name: 'Khalid', marks: 64},
]

const formatStudents = students.map((elem)=>{
  return `${elem.name} scored ${elem.marks}`;
})
console.log(formatStudents);

const numbersE = [10 , 20 , 30 , 40];
const resultE = numbersE.map(elem => elem + 5 + '😊');
console.log(resultE);


//Filter()

const numberF = [10 , 15 , 20 , 25 , 30 , 35];
const filterNubmer = numberF.filter((elem)=>{
  return elem % 2 === 0;
}) 
console.log(filterNubmer);

const ages = [12 ,18 ,25 , 15 ,30 ,16 ,22];
const ageFilter = ages.filter((elem)=>{
  return elem >= 18;
})
console.log(ageFilter);

const words = ['cat' , 'elephant' , 'dog' , 'giraffe' ,'ant' ,'tiger'];
const filterWordsByLength = words.filter((elem)=>{
  return elem.length > 4 ;
})
console.log(filterWordsByLength);

const mixed = [0, "hello", "", null, 42, undefined, false, "world", NaN];
const filterMixed = mixed.filter(Boolean);
// mixed.filter(element => Boolean(element))
console.log(filterMixed);

const agesF = [12 , 18 , 25 , 30 , 16 , 22];
const filterAge = agesF.filter((elem)=>{
  return elem > 17;
})
console.log(filterAge);

const studentsF = [
  {name: "Saif" , marks: 85},
  {name: "Robot" , marks: 45},
  {name: "Ego" , marks: 72},
  {name: "Khalid" , marks: 38}
]
const filterStudents = studentsF.filter((elem)=>{
  return elem.marks >= 50;
})
.map(elem => elem.name);
console.log(filterStudents);

const products = [
  {name: "Laptop" , price: 60000},
  {name: "Mouse" , price: 800},
  {name: "Keyboard" , price: 2500},
  {name: "Monitor" , price: 15000},
  {name: "Headphones" , price: 3000}
];
const filterProduct = products.filter((elem)=>{
  return elem.price < 5000;
})
console.log(filterProduct);

const users = [
  {name: 'Saif', age: 22, active: true},
  {name: 'Robot', age: 17, active: true},
  {name: 'Ego', age: 25, active: true},
  {name: 'Khlaid', age: 21, active: true}
]
const filterUsers = users.filter((elem)=>{
  return elem.age >= 18 && elem.active === true;
})
console.log(filterUsers);

const fruit = ["Apple", "Banana", "Cherry", "Apricot", "Blueberry"];
const filterFruit = fruit.filter((elem)=>{
  return elem.toLowerCase().startsWith("a")
})
console.log(filterFruit)

//Advanced
const nums = [1 , 2 ,2 , 3 , 4 , 4 ,5 ,1 ];
const filterNums = nums.filter((elem , i)=>{
  return nums.indexOf(elem) === i;
})
console.log(filterNums);

const letters = ["a", "b", "c", "d", "e", "f"];
const filterLetters = letters.filter((elem , i)=>{
  return i % 2 === 0 ;
})
console.log(filterLetters);

//filter and map combo
const orders = [
  { id: 1, total: 120, status: "shipped" },
  { id: 2, total: 80, status: "pending" },
  { id: 3, total: 200, status: "shipped" },
  { id: 4, total: 50, status: "shipped" }
];
// Get IDs of shipped orders over $100 → [1, 3]

const fitlerOrders = orders.filter((elem)=>{
  return elem.total > 100 && elem.status === 'shipped';
}).map((elem)=>{
  return elem.id;
})
console.log(fitlerOrders);

