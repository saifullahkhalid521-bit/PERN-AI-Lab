function sum (...nums){
  console.log(nums);
  return nums.reduce((a , n) => a + n, 0)
}
console.log(sum(1 , 2 , 3 , 4))

function addAll (...numbersR) {
  console.log(numbersR);
}
addAll(10 , 20 , 30 , 40);

function studentInfo(name ,age ,...subjectsR){
  console.log(name)
  console.log(age)
  console.log(subjectsR);
}
studentInfo("Saif" , 22 , "JavaScript" , "React" , "Node");

function addNumbers(firstR , ...numbersR){
  console.log(numbersR);
  return numbersR.reduce((acc , elem) => {
    return acc + elem;
  },0);
}
console.log(addNumbers(10 , 20 , 30 , 40 , 50));

const userR = {
  name: "Saif",
  age:22,
  city: "jamshedpur",
  skill: "JavaScript"
};
const {name , ...otherInfo} = userR;
console.log(name);
console.log(otherInfo);

const productR = {
  name: "Laptop",
  price: 60000,
  brand: "ASUS",
  stock: 5
}
const {brand , ...otrProductInfo}=  productR;
console.log(brand);
console.log(otrProductInfo);

function hobbies(name , ...hobbie) {
  return `${name}'s hobbies are ${hobbie.join(', ')}`
}
console.log(hobbies("Robot" , "Boxing" , "Coding" , "Hacking"));


function findMin(...numbersR){
  console.log(Math.min(...numbersR));
}
findMin(45 , 12 , 89 ,3 ,27);