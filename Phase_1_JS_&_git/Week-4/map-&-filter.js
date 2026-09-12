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