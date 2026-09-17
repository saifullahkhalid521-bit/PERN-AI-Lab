

const nums = [10 , 20 ,30];
const [a1 , b1 ,c]  = nums;
console.log(a1 , b1 , c);

const [a2 = 1 ,b2 = 2 , c3 = 3] = [10];
console.log(a2 , b2 , c3);

let aX = 1;
let bX = 2;
[aX , bX] = [bX , aX];
console.log(aX , bX);

const [first , ...restF] = [1 ,2 ,3 ,4 ,5];
console.log(first);
console.log(...restF);

function getCoords() {
  return [10 ,20];
}
const [xF , yF] = getCoords();
console.log(xF , yF);

//_________________________________________________________________________________________________________________________________________
console.log('Hello destructuring🤤');
const user = { name: "Alice" };
const { name: userName = "Guest", age: userAge = 0 } = user;
console.log(userName, userAge); // "Alice" 0

const user2 = {
  name: "Alice",
  address: {
    city: {
      c1: 'Ranchi',
      c2: 'Delhi'
    },
    zip: "10001"
  }
};

const {name , address: { city: {c1 , c2}, zip } } = user2;
console.log(name , c1, zip); // "NYC" "10001"

const user3 = {
  name1: 'Alice',
  age:25,
  city: "NYC",
  role: "admin"
};
const {name1 , ...rest} = user3;
console.log(name1);
console.log(rest);

function greet ({ name = "Guest" , city = "Nowhere"} = {}){
  console.log(`Hello ${name} from ${city}`);
}
greet();

function greet2({name = 'Saif' , city = 'Ranchi'} = {}){
  console.log(`Hello ${name} 😎 , from ${city}`)
}
// greet2({name: 'Robot', city:'Ranchi'});
greet2();

//Level -> 1
console.log('Level -> 1👽');
const point = [10 ,20];
const [x , y] = point;
console.log(x , y);

const user4 = {name2: "Alice" , age: 25};
const {name2 , age} = user4;
console.log(name2 , age);

const arr = [1 , 2 , 3 , 4 , 5];
const [, , three , ...rests] = arr;
console.log(three , ...rests);

const user5 = {name5: 'Bob'};
const {name5 , age5 = 18} = user5;
console.log(age5);

const userX = {nameX: 'lala'};
const {ageX = 99 , nameX} = userX;
console.log(ageX , nameX) ;

let a = 1;
let b = 2;
[a ,b] = [b ,a]
console.log(a ,b);

//Level -> 2
console.log('level -> 2🤔');

const user6 = {
  name6 : "Alice" ,
  age6: 25
};
const {name6 : userName6 , age6} = user6;
console.log(userName6 , age6);

const user7 = {
  name7: "Robot",
  address: {city: "NYC" , zipX: "10001"},
};
const {name7 , address: {city , zipX}} = user7;
console.log(city ,zipX);

const nums1 = [1 , 2 , 3 , 4 , 5];
const [first1 , ...rest1] = nums1;
console.log(first);
console.log(...rest1);

const user8 = { name: "Alice" ,age: 25};
function introduce({name ,age}) {
  return `${name} is ${age}`;
};
console.log(introduce(user8));

const user9 = { name9: "Alice" , age9: 25 , city9: "NYC" , role9: "admin"};
const {name9 , ...rest9r } = user9;
console.log(rest);

//Level -> 3
console.log('Levle -> 3🥺');
function getMinMax(nums) {
  return [Math.min(...nums) , Math.max(...nums)];
}
const [min , max] = getMinMax([3 , 1 , 4 ,5 ,2]);
console.log(min , max);

const state = ["active" , () => console.log("setter")];
const [status , setStatus] = state;
console.log(status , setStatus);

function greet ( {name = "Guest" , city ="Nowhere" } = {}){
  return `Hello ${name} from ${city}`;
}
console.log(greet());
console.log(greet({name: "Alice"}));

const response = { statusCode: 200, data: { name: "Alice" } };

function handleResponse({ statusCode: code, data }) {
  return `${code}: ${data.name}`;
}
console.log(handleResponse(response));

