

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

