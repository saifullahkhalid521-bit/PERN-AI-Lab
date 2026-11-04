console.log("hello Event Listner!");

const countBtn = document.querySelector("#countBtn");
let count = 0;

countBtn.addEventListener("click" , ()=>{
  count+=1;
  countBtn.innerHTML = `Click Me: ${count}`;
})