const promiseOne = new Promise(function (resolve , reject){
  setTimeout(()=>{
    resolve();
    console.log("Async task is compelete");
  },1000);
})

promiseOne.then(()=>{
  console.log("PromisOne resolve done!");
})

new Promise((resolve , reject)=>{
  setTimeout(()=>{
    resolve();
    console.log("Second promise is done.");
  },1000);
}).then(()=>{
  console.log('Second resolve is also done!');
})


const promiseThree = new Promise((resolve , reject)=>{
  setTimeout(()=>{
    resolve({id: 101 , name:"Robot"});
    console.log("Thired promise one the way.");
  },1000);
})

promiseThree.then((user)=>{
  console.log("Thired promise is completed!");
  console.log(`User id is: ${user.id} and user name is: ${user.name}`);
});


const promiseFour = new Promise ((resolve , reject)=>{
  setTimeout(()=>{
    let error = false;
    if(!error){
      resolve({username: "Robot" , password: 1234});
    }
    else{
      reject("ERROR: something went wrong.");
    }
  },1000)
})

promiseFour
.then((data)=>{
  console.log(data);
  // console.log(data.username);
  return data.username;
})
.then((username)=>{
  console.log(username);
})
.catch((message)=>{
  console.log(message);
}).finally(()=> console.log(`Promise is either resolved or rejected.`));


const promiseFive = new Promise ((resolve , reject)=>{
  setTimeout(()=>{
    let error = true;
    if(!error){
      resolve({username: "JavaScript" , password: 123 })
    }
    else{
      reject("ERROR: JS went wrong!");
    }
  }, 1000)
})

async function consumePromiseFive(){
  try{
     const response = await promiseFive
  console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();
