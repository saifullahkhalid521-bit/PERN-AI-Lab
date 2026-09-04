let words = ["Orange" , "House" , "Drive" , "Google"];

words.forEach((word) => {
    word = word.toUpperCase();
    console.log(word);
});
console.log(words);


// words.forEach((word , index) => {
//     words[index] = word.toUpperCase();
//     console.log(word);
// });
// console.log(words);

let fingers = ["Thumb" , "Index_finger" , "Middle_finger" , "Ring_finger" , "Little_finger"];

fingers.forEach((finger , index , array) => {
  finger = finger.toUpperCase();
  console.log(finger , array[index+1]);
})


let information = {
  name : "Saifullah",
  age: 21,
  city: "Ranchi"
}

for (const key in information){
  console.log(`${key}: ${information[key]}`);
}


const marks = {
  English: 94,
  Science: 85,
  Maths: 92
}

for (const key in marks){
  console.log(key);
}


const phone = {
  brand: "POCO",
  model: "X3Pro",
  price: 21000
}

for (const key in phone){
  console.log(phone[key]);
}


let fruits  = {
  apple: 100,
  banana: 60,
  lichi: 110,
  gawawa: 50,
  mango: 80
}

for (key in fruits){
  console.log(key +': '+fruits[key]); 
}


// for...in in Array
let colors = ['Red' , 'Orange' , 'Green'];

for (const index in colors){
  console.log(index);
}


let numbers = [32 , 54 , 12 , 53 , 65];

for (const index in numbers){
  console.log(numbers[index]);
}

let fruit = ['apple' , 'banana' , 'orange' , 'kiwi'];
for (const index in fruit) {
  console.log(index + ': ' + fruit[index]);
}


let mark = [93 , 92 , 83 , 71 , 63];
let total = 0;
for (const index in mark){
   total+= mark[index];
}
console.log(total);

const names = ['Saif' , 'Asad' , 'Sanu' , 'Irfan' , 'Salman'];

for (const index in names){
  if(index%2 === 0){
    console.log(names[index]);
  }
}



let Afruits = ['Mango' , 'Papaya' , 'Orange' , 'Banana' , 'Kiwi'];

for(const values of Afruits){
  console.log(values);
}

let Anumbers = [21 ,53 , 65 , 42 ,65];
let NumTotal = 0;

for (const values of Anumbers) {
  NumTotal+= values;
}
console.log(NumTotal);

let Amarks = [92 , 56 , 93 , 83 , 63];
let highestMarks = 0;
 for(const values of Amarks){
  if(highestMarks < values){
    highestMarks = values;
  }
 }
 console.log(highestMarks);



 let Anames = ["Saifullah" , "Sanu" ,"Irfan" , "Salahuddin"];

 for(const values of Anames){
  if(values.length > 4){
    console.log(values);
  }
 }



 let Anumber = [23 ,53 ,62 ,56 , 88];

 for(const values of Anumber){
  if (values%2 === 0){
    console.log(values);
  }
 }


 
 let PSfruits = [];
 PSfruits.forEach((fruit) => {
  console.log(fruit);
 })
 PSfruits.push('apple' , 'banana' , 'mango');
  for(const values of PSfruits){
    console.log(values);
  };

 
 
 let PSnumbers = [10 , 20 , 30 ,40];

 PSnumbers.push(40 , 50);

 for(let i = 0 ; i< PSnumbers.length ; i++){
  console.log(PSnumbers[i]);
 };



 let PSfriends = ['Ali' , 'Ahmad'];

 PSfriends.push("MR.Robot" , "Ego");

 for(let i = 0 ; i < PSfriends.length ; i++){
  console.log(PSfriends[i]);
 }



 let poColors = ['red' , 'blue', 'green'];
 poColors.pop();

 poColors.forEach((colors)=>{
  console.log(colors);
 })
 console.log(poColors);



 let cities = ['Delhi' , 'Mumbai' , 'Pune'];
 cities.pop();

 cities.forEach((city)=>{
  console.log(city);
 })

 console.log(cities);