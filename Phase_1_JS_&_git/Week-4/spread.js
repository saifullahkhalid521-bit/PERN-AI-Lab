console.log(`Hello let's start with spread Operator🤏`)

const nums = [1 , 2 , 3];
console.log(nums);
console.log(...nums);

const a =[ 1 , 2 , 3];
const b = [...a];
b.push(4);
console.log(a);
console.log(b);

//merging arrays
// without spread
const a1 = [1 , 2];
const b1 = [3 , 4];
const merged = a1.concat(b1);
console.log(merged);

//with spread
const merged1 = [...a1 ,99, ...b1];
console.log(merged1);

//passing array items as function arguments
const nums2 = [5 , 2 , 9];
console.log(Math.max(...nums2));
console.log(Math.max(nums2));