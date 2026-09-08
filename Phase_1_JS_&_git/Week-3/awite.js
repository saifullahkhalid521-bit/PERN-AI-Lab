const test = new Promise ((resolve , reject)=>{
  let error = true
  if (!error){
    resolve({subject: "JavaScript" , name: "Robot"})
  }
  else{
    reject('ERROR: JS fails!')
  }
})

async function consumeTest() {
  try {
  const response = await test;
  console.log(response);
  } catch (error){
      console.log(error);
  }
}
consumeTest();


const badmosi = new Promise ((resolve , reject) => {
  let err = false;
  if(!err){
    const user = {
      data: 'Khayega kela 🍌',
      name: 'Appu Hatela 😈'
    }
    resolve(user);
  }else{
    reject('nahi mila kela😢');
  }
})
async function gundai () {
  try{
    const response = await badmosi;
    // console.log(badmosi);
    console.log(`Mera naam hai ${response.name} , ${response.data}`);
  }catch(err){
    console.log(err);
  }
}
gundai();


const  villain2 = new Promise ((resolve , reject) => {
  let error = true;
  if (!error){
     const user = {
      name: 'Bulla',
      data : 'rakhta hu khulla',
     }
     resolve (user);
  }else {
    reject('Aaj band hai!😒');
  }
})

async function bulla () {
  try{
    const response = await villain2;
    console.log(`Mera naam hai ${response.name} , ${response.data}😈`);
  }catch(err){
    console.log(`ERROR: ${err}`);
  }
}
bulla();


//Error handling
//Q1

async function ques1() {
  try{
    const response = await fetch('https://jsonplaceholder.typicode.com/users?utm_source=chatgpt.com')

    if(!response.ok){
      // throw new Error ('HTTP Error:', response.status);
      throw new Error(`HTTP Error: ${response.status}`);
    }
    const data = await response.json();
    data.forEach(user => {
      console.log(`Name : ${user.name} , Email : ${user.email}`);
    });
    return data;
  }catch(err){
    console.log(err.message);
  }
}
ques1();


//Q2
const postData = {
    title: "Learning Fetch",
    body: "I am practicing async await",
    userId: 1
};

async function ques2(){
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?utm_source=chatgpt.com' , {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })

    if(!response.ok){
      // throw new Error ('HTTP Error:', response.status);
      throw new Error(`HTTP Error: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  }catch(err){
    console.log('Error:', err.message);
  }
}
ques2();


//Q3
const checkLogin = new Promise ((resolve , reject)=>{
  let isLoggedIn = false;
  if (isLoggedIn){
    resolve('Login successful');
  }
  else{
    reject(new Error('Login failed'));
  }
})

async function Clog() {
  try{
    const response = await checkLogin;
    console.log(response);
  }
  catch(err){
    console.log(`Error:`, err);
  }
}
Clog();


//Q4
const getUser = new Promise ((resolve , reject)=>{
  let error = false;
  if (!error){
    const user = {
      name: 'Saif',
      age: 22,
      role: "Frontend Developer"
    }
    resolve(user);
  }
  else{
    reject(new Error('User data nahi mila!'));
  }
})
async function checkUser() {
  try{
    const response = await getUser;
    console.log(response.name);
    console.log(response.role);
  }
  catch(err){
    console.log('Erro: ', err);
  }
}
checkUser();