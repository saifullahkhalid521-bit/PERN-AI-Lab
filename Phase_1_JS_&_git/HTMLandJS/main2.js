console.log('hello world!');
const nameInput = document.querySelector("#nameInput");
const saveBtn = document.querySelector("#saveBtn");
const display = document.querySelector("#display");

const user = {
  name: "Saif",
  age: 22,
  skills:["JavaScript" , "React" , "Git"]
};

localStorage.setItem("user", JSON.stringify(user));

const savedUser = JSON.parse(localStorage.getItem("user"));

console.log(savedUser);
console.log(savedUser.name);
console.log(savedUser.skills);


const saveName = localStorage.getItem("userName");
if (saveName) {
  display.textContent = `Welcome back, ${saveName}`;
}
saveBtn.addEventListener("click", () => {
  const name = nameInput.value;
  localStorage.setItem("userName",name);
  display.textContent = `Saved successfully: ${name}`;
});
