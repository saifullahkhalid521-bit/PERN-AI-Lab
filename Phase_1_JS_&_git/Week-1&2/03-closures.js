// function outer() {
//     let count = 0;

//     function inner() {
//         count++;
//         console.log(count);
//     }

//     return inner;
// }

// const counter = outer();

// counter();
// counter();
// counter();


// function one () {
//   let a = "Saif";

//   function two () {
//     a = "Hello "+ a;
//     console.log(a); 
//   }
//   return two;
// }

// let three = one();
// three();
// three();
// three();


// //harry code
// function returnFunc() {
//   const x = () => {
//     let a = 1;
//     console.log(a);

//     const y = () => {
//       // let a = 2
//       console.log(a);

//       const z = () => {
//         // let a = 3
//         console.log(a);
//       }
//       z();
//     }
//     a = 999; 
//     y();
//   }
//   // x();\
//   return x ;
// }

// let a = returnFunc();

// a();

/*
COADING PRACTICE
*/
// Q1
const createCounter = () => {
  let a = 0 ;
  const inside = () => {
    a++;
    console.log(a);
  }
  return inside;
}

let counter = createCounter();
counter();
counter();
counter();

// Q2
const createGreeting = (name) => {
  const inner = () => {
    let Greet = "Hello " + name;
    console.log(Greet);
  }
  return inner;
}

const greetSaif = createGreeting("Saif");
greetSaif();
greetSaif();

const greetAli = createGreeting("Ali");
greetAli();


//Q3 Multiplier
const createMultiplier = (n) => {
  const insideMultiply = (m) => {
    return n * m ;
  }
  return insideMultiply;
}

const double = createMultiplier(2);
console.log(double(5));
console.log(double(8));

const triple = createMultiplier(3);
console.log(triple(5));
console.log(triple(10));

//Q4
const createScore = () => {
  let Score = 0;
  const tracker = () => {
    Score++ ;
    console.log("Score: "+Score);
  }
  return tracker;
}

const game = createScore();
game();
game();
game();


//Q5
  const createBankAccount = (n) => {

      let currentBalance = n;
    const accountData = {
      "deposit" : function (a) {
        currentBalance+=a;
        console.log("Balance: " + currentBalance); 
      },
      "withdraw" : function (b) {
        currentBalance-=b;
        console.log("Balance: " + currentBalance);
      },
      "balance" : function () {
        console.log("Balance "+currentBalance);
      }
    }
  return accountData;
}

const account = createBankAccount(1000);

account.deposit(500);

account.withdraw(200);

account.balance();

const addC = (a) => {
  return (b) => {
    return a + b;
  }
}
const addCS = addC(5);
console.log(addCS(3));

function outer1 () {
  let count = 0;

  function inner1 () {
    return ++count ;
  }
  return inner1;
}
const counter1 = outer1();
console.log(counter1())
console.log(counter1())
console.log(counter1())

// Counter function using closures
function createCounter1 () {
  let count = 0 ;
  return function () {
    count++;
    console.log(count+"🤏");
  }
}
const counter2 = createCounter1();
counter2();
counter2();
counter2();

// once function 
function once1(){
  let count = 0;
  return () => {
    if(count === 0){
      console.log("You called it once!");
      count++;
    }else{
      console.log("can't use this funtion any more");
    }
  }
}
const call = once1();
call();
call();
call();

function once2(fn) {
  let hasCalled = false;
  let result;

  return function (...args) {
    if (!hasCalled){
      hasCalled = true;
      result = fn(...args);
    }
    return result;
  }
}
const initialize = once2(() => {
  console.log("Initializing database...");
  return "Connected";
})
console.log(initialize());
console.log(initialize());

function createBankAccount1 (initialBalace){
  let balance = initialBalace;
  return {
    deposit (amount) {  
      balance+= amount;
    },
    getBalance () {
      console.log(balance);
    }
  } 
}
const myAccount = createBankAccount1(1000);
myAccount.deposit(500);
myAccount.getBalance();

function createMultiplier1 (factor) {
  return (multiply) => {
    return factor * multiply;
  }
}
const double1 = createMultiplier1(2);
const triple1 = createMultiplier1(3);

console.log(double1(5));
console.log(triple1(5));