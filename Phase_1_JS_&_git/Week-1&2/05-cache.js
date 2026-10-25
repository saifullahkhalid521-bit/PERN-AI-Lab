const square = () => {
  const cache = {};
  return (num) => {
    if (cache[num] !== undefined){
      console.log('From Cache...');
      return cache[num];
    }

    const result = num * num;
    cache[num] = result;
    console.log('Calculating...');
    return result;
  };
};

const squareOfNum = square();
console.log(squareOfNum(5));
console.log(squareOfNum(5));
console.log(squareOfNum(3));
console.log(squareOfNum(7));



const createUser = () => {
  let cache = {};
  return (id) => {
    if (cache[id] !== undefined){
      console.log(`User found in Cache..`);
      return `User is: ${cache[id]}`;
    };

    let user = id + 100 ;
    cache[id] = user;
    console.log('User added to cache..');
    return user;
  }
}
const getUser = createUser();
getUser(1);
getUser(2);

console.log(getUser(1));


// --------------------------------------------------------------------------------------------------------------------

//This

const person1 = {
  name: 'Saif',

  great(){
    console.log('Hello ' + this.name);
  }
};

const person2 = {
  name: 'mr.Robot',
}
person2.great = person1.great;

person2.great();


const student = {
  name:"Saif",
  course: "JavaScript",
  showDetails(){
    console.log('Name: '+this.name);
    console.log('Course: '+this.course);
  },
};

student.showDetails();

const student2 ={
  name: "Mr.Robot",
  course: "Hacking",
}
student2.showDetails = student.showDetails;

student2.showDetails();

// using this and functions

const myAccount1 = {
  Balance : 1000, 

  deposit (amount) {
    this.Balance+= amount;
    return this.Balance;
  },

  withdraw (amount) {
    if(amount > this.Balance){
      return "Balance is low.";
    }
    this.Balance-= amount;
    return this.Balance;
  }
}
console.log(myAccount1.Balance);
console.log(myAccount1.deposit(500));
console.log(myAccount1.Balance);
console.log(myAccount1.withdraw(1600));
console.log(myAccount1.Balance);

console.log("🫡 🫡 🫡 🫡 🫡")
// part 2 
const account2 = {
  Balance : 2000,
}
account2.deposit = myAccount1.deposit;
account2.withdraw = myAccount1.withdraw;

console.log(account2.Balance);
console.log(account2.deposit(500));
console.log(account2.Balance);
console.log(account2.withdraw(5600));
console.log(account2.Balance);

const account3 = {Balance: 3000};
console.log(myAccount1.deposit.call(account3 , 500));

