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