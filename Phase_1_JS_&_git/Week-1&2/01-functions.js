// function add(a , b) {
//   return a + b; 
// }
// console.log(add(1 , 2));


// const add2 = function(a , b){
//   return a + b;
// }
// console.log(add2(1 , 2));


// const add3 = (a , b) => a + b;
// console.log(add3(1 , 2));

const subtract = (a , b) => a - b;
console.log(subtract(10 , 5));


function multiply (a , b) {
  return a * b;
}
console.log(multiply(5 , 4));


const divide = function (a , b) {
  return a / b;
};
console.log(divide(20 , 5));


const square = n => n*n;
console.log(square(8));


// const isEven = (n) => {
//   if(n % 2 === 0){
//     console.log(true);
//   }
//   else{
//     console.log(false);
//   }
// };
// isEven(7);
// Here the problem is this funciton is not returning any value , the correct way is 
//return function ko wahi khatam (exit) bhi kar deta hai. Return ke baad jo code hoga, wo execute nahi hota.

const isEven = (n) => n % 2 === 0 ;
console.log(isEven(7));



// const greet = (name = "Guest") => {
//   return "Hello " + name;
// }
// console.log(greet());


const cube = (n) => n*n*n;
console.log(cube(3));


const largest = (a , b) => {
  let largeNum;
  if(a > b){
    largeNum = a;
  }
  else{
    largeNum = b;
  }
  return largeNum;
};
console.log(largest(10 , 20));


const greet1 = (name = "Guest") => {
  return "Hello "+name;
}
console.log(greet1("Saif"));


function greet () {
  return "Hello";
}

console.log(greet);
console.log(greet());

const sayHi = () => "Hi";

const another = sayHi;

console.log(another);
console.log(another());

//practice function creation
//part A
const sum = (a , b ,c) => a + b + c ;
console.log(sum(10 , 20 , 30));


const remainder = (a , b) => a % b ;
console.log(remainder(10,3));


function toFahrenheit (n) {
  return n * 9/5 + 32;
}
console.log(toFahrenheit(25));


const square1 = function (n) {
  return n*n;
}
console.log(square1(6));


const cube1 = function (n) {
  return n*n*n;
}
console.log(cube1(2));

//part B
const isPositive = (n) => n > 0 ;
console.log(isPositive(-80));


const DivisibleByFive = (n) => n % 5 === 0;
console.log(DivisibleByFive(120)); 


function graterThenHundred (n) {
  return n > 100 ;
}
console.log(graterThenHundred(4000));


//Part C
const welcome = (name = "Guest") => "Welocme "+ name;
console.log( welcome("Saif"));
console.log(welcome());


const fullName = (firstName , lastName) => {
  return `${firstName} ${lastName}` ;
}
console.log(fullName("Saif", "Khalid"));


const lengthOfString = (stringVal) => stringVal;
console.log(lengthOfString("Javascript".length));


//Part D
function greet2 (name = "Guest") {
  return "Hello " + name ;
}
console.log(greet2());
console.log(greet2("Saif"));


const power = (n , p = 2) => {
  let power = n ;
  for (i = 1 ; i < p ; i++){
    power = power * n ;
    // console.log(power);
  };
  return power ;
} ;
console.log(power(5 , 3));


//Part E
function test() {
    return "Hello";
}

console.log(test);


function hello() {
  return "Hello";
}
const x = hello;
console.log(x());


function add(a, b) {
    return a + b;
}

const x1 = add(5, 3);
const y = add;

console.log(x1 + 2);
console.log(y(5, 3));