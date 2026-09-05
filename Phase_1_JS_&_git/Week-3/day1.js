console.log("1. I start learing JavaScript");

setTimeout(()=> {
  console.log('3. Time task completed.');
},2000);

setTimeout(()=> {
  console.log('4. Main bhi turant chlta hoon.');
}, 2000);

console.log('2. I do other work while waiting.');



new Promise ((resolve , reject) => {
  setTimeout(()=>{
    let num = 23;
    if (num === 23){
      const person = {
        id: 101,
        name: 'Mr.Robot'
      }
      resolve( person);
    }
    else{
      reject("Variable did't match!");
    }
  },2000);
}).then((response)=>{
  console.log(response);
  // console.log(response.name);
  return response.name;
}).then((upData)=>{
  console.log(`nicha ka then hai lala: ${upData}`);
})
.catch((err)=>{
  console.log("ERROR: ", err);
}).finally(()=>{
  console.log("Ho gaya finally!");
});


const AAJA = new Promise ((resolve , reject)=>{
  setTimeout(()=>{
    let error = false;
    if(!error){
      const user = {
        roll: 65,
        sub: "JABHA_SCRIPT"
      }
      resolve(user);
    }
    else{
      reject("KAHA GAYA MERA JABHA😢");
    }
  },2000);
})

async function JABHA () {
  try {
    const le = await AAJA;
    console.log("YESSS😍 aa gaya mera",le.sub);
  } catch (err) {
      console.log(`ERROR: ${err}`);
  }
}

JABHA();