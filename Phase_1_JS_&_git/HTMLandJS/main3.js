console.log("hello Event Listner!");

const countBtn = document.querySelector("#countBtn");
let count = 0;

countBtn.addEventListener("click" , ()=>{
  count+=1;
  countBtn.innerHTML = `Click Me: ${count}`;
})

const userInput = document.querySelector("#userInput");
const output = document.querySelector("#output");

userInput.addEventListener('input' , (e) =>{
  output.innerHTML = e.target.value;
})