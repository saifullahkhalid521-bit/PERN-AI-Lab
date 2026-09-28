const numbersM = [5 , 12 , 8 , 20 , 3 , 15];
console.log(numbersM.filter(ele => ele > 10).map(ele => ele * 2));

const productsM = [
  {name: "Laptop" , price: 50000},
  {name: "Mouse" , price: 800},
  {name: "Keyboard" , price: 1500},
  {name: "Monitor" , price: 12000},
]
const productFilMap = productsM.filter(ele => ele.price > 1000).map(ele => ele.name).sort((a , b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(productFilMap);

