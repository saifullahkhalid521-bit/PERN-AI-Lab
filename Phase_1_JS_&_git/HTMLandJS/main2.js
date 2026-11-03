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


const userInput = document.querySelector("#userInput");
const themeSelect = document.querySelector("#themeSelect");
const saveProfileBtn = document.querySelector("#saveProfileBtn");
const profileDisplay = document.querySelector("#profileDisplay");

const saveProfile = JSON.parse(localStorage.getItem("userProfile"));
if(saveProfile){
  profileDisplay.textContent = `Welcome back, ${saveProfile.name}! Theme: ${saveProfile.theme}`
}
saveProfileBtn.addEventListener("click" , ()=>{
  const profileData = {
    name: userInput.value,
    theme: themeSelect.value
  };
  localStorage.setItem("userProfile", JSON.stringify(profileData));
  profileDisplay.textContent = `Profile saved! ${profileData.name}, Theme: ${profileData.theme}`;
});