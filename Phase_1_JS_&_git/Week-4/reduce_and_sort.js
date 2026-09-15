console.log('Reduce -> Level 1 😊')
const nums = [1 ,2 ,3 ,4 ,5];
const sumOfnums = nums.reduce((acc , cVal) => {
  return acc + cVal;
}, 0);
console.log(sumOfnums);
/* 
0 + 1 = 1
1 + 2 = 3
3 + 3 = 6
6 + 4 = 10
10 + 5 = 15
*/

const numsM = [2 ,3 ,4];
const numsMr = numsM.reduce((acc , n)=>{
  return acc * n;
},1);
console.log(numsMr);

const numsMax = [5 ,12 ,8 ,20 ,3];
const numsMaxR = numsMax.reduce((acc , n)=>{
 return  acc < n ? n : acc;
  
}, numsMax[0]);
console.log(numsMaxR);

const numMin = [5 ,12 ,8 ,20 ,3];
const numMinR = numMin.reduce((acc , n)=> {
  return acc > n ? n : acc;
}, numMin[0]);
console.log(numMinR);

const words = ["Hello" ,"World" ,"from" ,"JS"];
const wordsJoin = words.reduce((acc , w)=> {
  return acc?acc + " " + w:w ;
},"");
console.log(wordsJoin);