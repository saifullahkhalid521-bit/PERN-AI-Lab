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