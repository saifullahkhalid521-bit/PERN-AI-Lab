const addBtn = document.querySelector("#addbtn");
const areadiv = document.querySelector(".area");
const text = document.querySelector(".text");
console.log("Hello file 2!");

addBtn.addEventListener("click" , (e) => {
  e.preventDefault();
  const userInput = text.value;
  areadiv.innerHTML+= `<li>${userInput}</li>`;
})