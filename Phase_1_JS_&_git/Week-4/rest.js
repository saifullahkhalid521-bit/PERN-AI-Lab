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


//Level -> 1
console.log('Level -> 1😊');

function collect(...rest){
  return rest;
}
console.log(collect(1 , 2 , 3 , 4 , 5));

const nums1 = [1 , 2 , 3 , 4 , 5];
const [first1 , ...rest1] = nums1;
console.log(first1 , rest1);

const nums2 = [1 , 2 , 3 , 4 , 5];
const [one , two , ...rest2] = nums2;
console.log(one , two , rest2);

const user = {name1: "Saifullah" , age: 22 , city: "Ranchi"};
const {name1 , ...restD} = user;
console.log(restD);

function add(...rest){
 return rest.reduce((acc , n)=>{
    return acc + n;
  },0);
}
console.log(add(1 , 2 , 3 , 4 , 5));


//level -> 2
console.log('Level -> 2🫡');

function greeting(greet , ...rest){
  return `${greet} , ${rest.join(', ')}`
}
console.log(greeting('Hello' , 'Saif' , 'Khalid' , 'Robot'));


const user2 = {name2 : "Ego" , password1: "egoset@1234" , email1:"ego.com"};
const {password1 , ...rest3} = user2;
console.log(rest3);

function maxOf(...rest){
  // return rest.reduce((acc ,n)=> {
  //   if(acc > n){
  //     acc = acc;
  //   }
  //   else{
  //     acc = n;
  //   }
  //   return acc;
  // },rest[0])
  return Math.max(...rest);
}
console.log(maxOf(3 ,8 , 1 , 9 , 4));

const arr = ['a' , 'b' , 'c' , 'd'];
const [ , ...rest4] = arr;
console.log( rest4);

const fullName = "John Ronald Reuel Tolkien";
const spFname = fullName.split(' ');
const [fName , ...restName] = spFname;
console.log(restName);

//Level -> 3
console.log('level -> 3 😎');

function log(ind , ...msg){
  return `[${ind}] ${msg.join(', ')}`;
}
console.log(log("INFO" , "Server started" , "Port 3000"));

function multiplyAll(mltp , ...rest){
  return rest.map((n) => mltp * n);
}
console.log(multiplyAll(2 , 3 , 4 , 5));

function pick(obj , ...rest){
  return rest.reduce((acc , n) => {
    if (n in obj) acc[n] = obj[n];
    return acc;
  },{});
}
const user3 = { name: "Alice", age: 25, city: "NYC", role: "admin" };
console.log(pick(user3, "name", "city"));

const user4 = {name: "RIO" , age:25 , city: "NYC" , role: 'admin'};

function omit(obj , ...keys){
  const result = { ...obj};
  for (const key  of keys) {
    delete result[key];
  }   
  return result;
}
console.log(omit(user4 , 'role' , 'age'));

function Button({ variant, ...rest }) {
  return { className: `btn-${variant}`, ...rest };
}
function Button({ variant, ...rest }) {
  return { className: `btn-${variant}`, ...rest };
}
console.log(Button({ variant: "primary", onClick: "fn", disabled: true }));