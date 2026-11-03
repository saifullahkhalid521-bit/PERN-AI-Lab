console.log('hello world!');

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