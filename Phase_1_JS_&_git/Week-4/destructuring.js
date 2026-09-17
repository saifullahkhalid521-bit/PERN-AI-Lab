console.log('Hello destructuring🤤');
const user = { name: "Alice" };
const { name: userName = "Guest", age: userAge = 0 } = user;
console.log(userName, userAge); // "Alice" 0

const user2 = {
  name: "Alice",
  address: {
    city: {
      c1: 'Ranchi',
      c2: 'Delhi'
    },
    zip: "10001"
  }
};

const {name , address: { city: {c1 , c2}, zip } } = user2;
console.log(name , c1, zip); // "NYC" "10001"

const user3 = {
  name1: 'Alice',
  age:25,
  city: "NYC",
  role: "admin"
};
const {name1 , ...rest} = user3;
console.log(name1);
console.log(rest);

function greet ({ name = "Guest" , city = "Nowhere"} = {}){
  console.log(`Hello ${name} from ${city}`);
}
greet();

function greet2({name = 'Saif' , city = 'Ranchi'} = {}){
  console.log(`Hello ${name} 😎 , from ${city}`)
}
// greet2({name: 'Robot', city:'Ranchi'});
greet2();