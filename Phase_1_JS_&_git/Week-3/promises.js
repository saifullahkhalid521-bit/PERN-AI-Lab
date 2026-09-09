const promiseOne = new Promise(function (resolve , reject){
  setTimeout(()=>{
    resolve();
    console.log("Async task is compelete");
  },1000);
})

promiseOne.then(()=>{
  console.log("PromisOne resolve done!");
})

new Promise((resolve , reject)=>{
  setTimeout(()=>{
    resolve();
    console.log("Second promise is done.");
  },1000);
}).then(()=>{
  console.log('Second resolve is also done!');
})


const promiseThree = new Promise((resolve , reject)=>{
  setTimeout(()=>{
    resolve({id: 101 , name:"Robot"});
    console.log("Thired promise one the way.");
  },1000);
})

promiseThree.then((user)=>{
  console.log("Thired promise is completed!");
  console.log(`User id is: ${user.id} and user name is: ${user.name}`);
});


const promiseFour = new Promise ((resolve , reject)=>{
  setTimeout(()=>{
    let error = false;
    if(!error){
      resolve({username: "Robot" , password: 1234});
    }
    else{
      reject("ERROR: something went wrong.");
    }
  },1000)
})

promiseFour
.then((data)=>{
  console.log(data);
  // console.log(data.username);
  return data.username;
})
.then((username)=>{
  console.log(username);
})
.catch((message)=>{
  console.log(message);
}).finally(()=> console.log(`Promise is either resolved or rejected.`));


const promiseFive = new Promise ((resolve , reject)=>{
  setTimeout(()=>{
    let error = true;
    if(!error){
      resolve({username: "JavaScript" , password: 123 })
    }
    else{
      reject("ERROR: JS went wrong!");
    }
  }, 1000)
})

async function consumePromiseFive(){
  try{
     const response = await promiseFive
  console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();



const prac = new Promise ((resolve , reject)=>{
  let err = false;
  if (!err){
    const user = {
      id: 101,
      targen: "Your_self"
    }
    resolve(user);
  }
  else{
    reject("something went wrong with data!");
  }
})
.then((response)=>{
  return response;
})
.then((data)=>{
 console.log(data.targen);
})
.catch((err)=>{
  console.log('ERROR: ', err);
});


// Promise Chaining

// getUser()
// getPosts()
// getComments()

// getUser()
// .then((user)=>{
//   return getPosts(user.id);
// })
// .then((posts)=>{
//   return getComments(posts[0].id);
// })
// .then((comment)=>{
//   console.log(comment);
// })
// .catch(err =>{
//   console.log('error:', err.message);
// });



//   fetch('https://jsonplaceholder.typicode.com/users/1')
// .then(response => {
//   if(!response){
//     throw new Error (`HTTP Error: ${response.status}`);
//   }
//   return response.json();
// })
// .then(user => {
//   console.log(`User: ${user}`);

//   return fetch('`https://jsonplaceholder.typicode.com/posts?userId=${user.id');
// })
// .then((response)=>{
//   if (!response.ok){
//     throw new Error (`HTTP Error: ${response.status}`);
//   }
//   return response.json();
// })
// .then((post)=>{
//   console.log("Post:", post);
// })
// .catch(error => {
//   console.log("Error:", error.message);
// });


// 😈
fetch('https://jsonplaceholder.typicode.com/users/4')
.then((response)=>{
  if(!response.ok){
    throw new Error (`HTTP Error: ${response.status}`);
  }
  return response.json();
})
.then((user)=>{
  console.log(`User: ${user.name}`);
  return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
})
.then((response)=>{
  if(!response.ok){
    throw new Error (`HTTP Error: ${response.status}`);
  }
  return response.json();
})
.then((post)=>{
  console.log("Post: ",post[1].title);
  return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post[1].id}`);
})
.then(response =>{
  if (!response.ok){
    throw new Error (`HTTP Error: ${response.status}`);
  }
  return response.json();
})
.then(comment=>{
  // console.log(`First comment: ${comment[0].name}`);
  comment.forEach((element , index) => {
    console.log(`Comment ${index+1}: ${element.name}`);
  });
})
.catch((err)=>{
  console.log("Error: ", err);
})
// 😈

// 🥸
async function getData() {
    try {

        // 1. Get user
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/users/4'
        );

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const user = await response.json();

        console.log("User:", user.name);


        // 2. Get posts
        const postResponse = await fetch(
            `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
        );

        if (!postResponse.ok) {
            throw new Error(`HTTP Error: ${postResponse.status}`);
        }

        const posts = await postResponse.json();

        console.log("Post:", posts[1].title);


        // 3. Get comments
        const commentResponse = await fetch(
            `https://jsonplaceholder.typicode.com/comments?postId=${posts[1].id}`
        );

        if (!commentResponse.ok) {
            throw new Error(`HTTP Error: ${commentResponse.status}`);
        }

        const comments = await commentResponse.json();

        comments.forEach((comment, index) => {
            console.log(`Comment ${index + 1}: ${comment.name}`);
        });

    } catch (error) {
        console.log("Error:", error.message);
    }
}

getData();
// 🥸

// promise nesting
// getUser()
//     .then(user => {

//         getPosts(user.id)
//             .then(posts => {

//                 getComments(posts[0].id)
//                     .then(comments => {

//                         console.log(comments);

//                     });

//             });

//     });

// 🥸
