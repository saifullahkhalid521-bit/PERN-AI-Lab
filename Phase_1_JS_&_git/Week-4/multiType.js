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

const ordersM = [
  {item: "Shirt" , price: 800 , quantity : 2},
  {item: "Shoes" , price: 2000 , quantity : 1},
  {item: "Cap" , price: 500 , quantity : 3},
  {item: "Watch" , price: 3000 , quantity : 1},
]
console.log(ordersM.filter(ele => ele.price * ele.quantity >= 1500).reduce((acc , ele) => {
  return acc + ele.price; 
}, 0))

const usersM = [
  {name: "Saif", skills: ["JS", "React"] },
  {name: "Ali", skills: ["PHP"] },
  {name: "Robot", skills: ["Node", "Express" , "PostgreSQL"] },
]
const twoSkills = usersM.filter(ele => ele.skills.length > 1);
const extraSkillsM = ["Git" , "GitHub"];
const newSkills = [...twoSkills].map(ele => ele.skills.push(...extraSkillsM));
console.log(newSkills);
console.log(twoSkills);

const studentsM = [
  {name: "Saif" , marks: [80 , 90 , 85] },
  {name: "Robot" , marks: [60 , 70 , 65] },
  {name: "Khalid" , marks: [90 , 95 , 88] },
  {name: "Ego" , marks: [75 , 80 , 70] }
]
const avgMoreT80 = studentsM.filter(ele => ele.marks.reduce((acc , n) => {
  return acc + n;
}, 0) / ele.marks.length >= 80) ;

const newAvgStudents = avgMoreT80.map(ele => {
  const average = ele.marks.reduce((acc , n) => acc + n, 0) / ele.marks.length;

  return {
    name: ele.name,
    average: average
  };
})
.sort((a , b) => b.average - a.average);
console.log(newAvgStudents);