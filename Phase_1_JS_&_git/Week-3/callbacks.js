function greet(name , callback){
  console.log(`Hello, ${name}`);
  callback();
}

function afterGreeting(){
  console.log("Greeting complete!");
}

greet("Saif" , afterGreeting);



// console.log("Start");

// setTimeout(() => {
//   console.log("Data aa gaya!");
// }, 2000);

// console.log("End");


// function processUser (name , callback){
//   console.log(`${name} ka data process ho raha hai...`);

//   setTimeout(()=> {
//     callback(`${name} ka data ready hai.`);
//   },2000);
// }

// processUser("Saif" , robot);

// function robot (message) {
//   console.log(message);
// }

// function orderFood(food , callback){
//   console.log(`${food} order ho raha hai...`);

//   setTimeout(()=> {
//     callback(food);
//   }, 2000);
// }

// function readyFood(food) {
//   console.log(`${food} ready hai!`);
// }

// orderFood('Pizza' , readyFood);



function checkAge (age , callback){
  if(age >= 18){
    callback(`You can vote.`);
  }
  else{
    callback(`You cannot vote.`);
  }
}

checkAge(15 , (message) => {
 console.log(message);
});




// function getUser (callback) {
//   console.log('User fech ho raha hai...');

//   const user = {
//     id: 1,
//     name: 'Saif',
//   };

//   callback(user);
// }

// function userData (data) {
//   console.log(data);
// }
// getUser(userData);


//Error callbacks

// function getUserA (id , callback) {
//   console.log('User is feching...');

//   setTimeout(()=>{
//       if (id === 1){
//       const user = {
//         id: 1,
//         name: 'Mr.Robot',
//       }
//       callback(null , user);
//     }
//     else{
//       callback("User not found:" , null);
//     };
//   },2000);
  
// };

// function checkUser (error , data){
//   if(error){
//     console.log("Error:" , error);
//     return;
//   }
 
//     console.log("User found:" , data);
  
// }

// getUserA(1 , checkUser);
// getUserA(3 , checkUser);


// const login = (username , password , callback) => {
//   console.log('processing....');
//   setTimeout(()=>{
//     if(username === "Robot" && password === 1234){
//       const user = {
//         name: "Robot",
//         role: "Student",
//       };
//       callback(null , user);
//     }
//     else {
//       callback("Incorrect username or password:" , null);
//     }
//   }, 1000);
// };

// const checkLogin = (error , data) => {
//   if (error){
//     console.log(error);
//     return;
//   }
//   console.log('User found' , data);
// };

// login('Robot' , 1234 , checkLogin);
// login('Robot' , 2234 , checkLogin);


const findproduct = (id , callback) => {
  console.log('Finding your product....');
  if(id === 101){
    const product = {
      id: 101,
      name: "Laptop",
      price: 50000,
    };
    callback(null , product);
  }
  else{
    callback("Product not found:" , null);
  };
};

const product = (error , data) => {
  if (error){
    console.log(error);
    return;
  }
  console.log('Product found:' , data);
}

findproduct(101 , product);
// findproduct(102 , product);


// const getResult = (marks , callback) => {
//   console.log("Checking your result...");

//   setTimeout(()=>{
//     let result;
//     if (marks < 0 || marks > 100){
//       callback("Invalid marks" , null);
//     }
//     else if(marks >= 40){
//       result = 'Pass';
//       callback(null , result);
//     }
//     else{
//       result = 'Fail';
//       callback(null ,result);
//     }
//   }, 1500);
// };

// const result = (error , data) => {
//   if (error){
//     console.log(error);
//     return;
//   }
//   console.log("You are:" , data);
// }

// getResult(60 , result);
// getResult(30 , result);
// getResult(-60 , result);


// function getUser(callback){
//   setTimeout(() => {
//     console.log("User found:");
//     callback({id: 1 , name: "Saif"});
//   },1000);
// }

// function getOrders(userId , callback){
//   setTimeout(()=>{
//     console.log("Order recived:");
//     callback([
//       {id:101 , product:'Laptop'},
//       {id:102 , product:'Mouse'},
//     ]);
//   },1000);
// }

// function getPayment(orderId , callback){
//   setTimeout(()=>{
//     console.log("Payment recived:");
//     callback({orderId, status:"Paid"});
//   },1000);
// }

// function user(user){
//   getOrders(user.id , orders);
// };

// function orders (orders){
//   getPayment(orders[0].id , Payment);
// };

// function Payment(Payment){
//   console.log("Final payment:" , Payment);
// };

// getUser(user);



// Q1
// function getStudent(callback){
//   setTimeout(()=>{
//     console.log("Student found:");
//     callback({id:101 , name:'Robot'});
//   },1000);
// }

// function getMarks(studentId , callback){
//   setTimeout(()=>{
//     console.log('Id recived:');
//     callback([
//       {id:101 , marks: 85},
//       {id:102 , marks: 60}
//     ])
//   },1000);
// }

// function getGrade(marks ,callback){
//   setTimeout(()=>{
//     console.log("Marks recived:");
//     if(marks >= 80){
//       callback("A");
//     }else if (marks >= 60){
//       callback("B");
//     }
//     else{
//       callback("C");
//     }
//   },1000);
// }

// getStudent((student)=>{
//   getMarks(student.id,(marksList)=>{
//     getGrade(marksList[0].marks , (grade)=>{
//       console.log(`${student.name} got : ${grade}`);
//     });
//   });
// });

function selectMovie(callback){
  setTimeout(()=>{
    console.log("Movie found:");
    callback({id: 10 , name:"Avangers"});
  },1000);
};

function selectSeats(movieId , callback){
  setTimeout(()=>{
    console.log("Seat Id found:");
    callback([
      {id:'A5' , price: 300},
      {id:'B3' , price: 400},
    ])
  },1000);
}

function makePayment(seatId , callback){
  setTimeout(()=>{
    console.log("Payment is processing");
    callback({seatId , status: "Success"});
  },1000);
}

selectMovie((movie)=>{
  selectSeats(movie.id,(set)=>{
    makePayment(set[0].id , (payment)=>{
      console.log(`${movie.name} booking successful: ${payment.status}`)
    })
  })
})



function getCart(callback){
  setTimeout(()=>{
    console.log('Product found:');
    callback({id:101, name: "Laptop"});
  },4000);
}

function placeOrder(ProducId , callback){
  setTimeout(()=>{
    console.log('Product ID found:');
    callback([
      {id:"ORD-1" , status:"Placed"},
      {id:"ORD-2" , status:"pending"},
    ]);
  },1000);
}

function trackOrder(orderId , callback){
  setTimeout(()=>{
    console.log("Checking your order:");
    callback({orderId , status:"Out for delivery"});
  },1000);
}

getCart((order)=>{
  placeOrder(order.id,(placeOrder)=>{
    trackOrder(placeOrder[0].id,(track)=>{
      console.log(`${order.name} -${track.status}`);
    });
  });
});


