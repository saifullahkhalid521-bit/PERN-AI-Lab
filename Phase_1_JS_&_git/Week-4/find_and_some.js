//find() method questions solving
//Level One
const nums = [3 ,7 ,12 , 5 ,20 ,15];
const findNums = nums.find(elem => elem > 10);
console.log(findNums);

const words = ["apple" , "banana" , "cherry" , "bluebery" , "avocado"];
const findWords = words.find(elem => elem.startsWith('b'));
console.log(findWords);

const numsN = [5 , 8 , -3 , 10 , -7 , 2];
const findnumsN = numsN.find(elem => elem < 0);
console.log(findnumsN);

