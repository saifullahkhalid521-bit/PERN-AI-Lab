const dataOne = new Promise (resolve => 
{
  setTimeout(()=>{
    resolve('I am the first data 😈');
  },2000);
})
 
const dataTwo = new Promise ( resolve => 
{
  setTimeout(()=>{
    resolve('I am second data 😘')
  },2000);
}
);

async function dataAll() {
  try{
    const [One , Two] = await Promise.all([dataOne , dataTwo])
      console.log(One);
      console.log(Two);
  }catch(err){
    console.log(err);
  }
}
dataAll();