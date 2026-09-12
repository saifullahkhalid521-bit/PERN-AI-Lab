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