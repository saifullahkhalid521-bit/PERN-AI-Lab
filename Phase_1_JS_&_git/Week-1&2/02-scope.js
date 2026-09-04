let name = "Saif";
function scope1 () {
  return name;
}
console.log(scope1());


let name1 = "Khalid";
function scope2 () {
  let name1 = "Khalid1";
  return name1;
}
console.log(scope2());


// function scope3 () {
//   return name2;

//   let name2 = "Saif Khalid";
// }
// console.log(scope3());

let value = "Global" ;

function first () {
  let value = "First";

  function second () {
    let value = "Second";

    console.log(value);
  }
  second();
}
first();

//Q1
let x = 10;
function first1() {
  console.log(x);
}
first1();

//Q2
function first2() {
  let x = 20;
  console.log(x);
}
first2();

//Q3
function first3() {
  let x = 20;

  function second() {
    console.log(x);
  }
  second();
}
first3();

//Q4
function first4() {
  function second() {
    console.log(x);
  }
  second();
}
first4();

//Q5

let x1 = "Global";

function first5() {

  let x1 = "First";

  function second() {

    let x1 = "Second";

    function thired() {

      console.log(x1);
    }
    thired();
  }
  second();
}
first5();

//Q6
function first6() {
  let x = "First";

  function second() {
    function thired(){
      console.log(x);
    }
    thired();
  }
  second();
}
first6();


//Function scope VS block Scope


// function demo() {
//   if (true){
//     var x = 10;
//   }
//   console.log(x);
// }

// demo();


//Error code 
// function demo1(){
//   if(true){
//     let x =10;
//   }
//   console.log(x);
// }
// demo1();



function demo() {
    if (true) {
        let x = 10;
    }

    console.log(x);
}
demo();


