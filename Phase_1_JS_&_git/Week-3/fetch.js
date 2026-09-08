// fetch('https://v2.jokeapi.dev/joke/Any?type=single')
// .then(Response =>{
//   return Response.json();
// })
// .then((data)=>{
//   console.log(data.joke);
// })
// .catch((err)=>{
//   console.log('ERROR: ', err);
// });


// Agar joke API down ho
// fetch('https://v2.jokeapi.dev/joke/Any?type=single')
//     .then(response => {
//         console.log('Status:', response.status);  // 200 (agar up hai)
//         console.log('OK?', response.ok);          // true
        
//         if (!response.ok) {
//             throw new Error(`API Down! Status:  ${response.status}`);
//         }
//         return response.json();
//     })
//     .then(data => {
//         if (data.joke) {
//             console.log('😂', data.joke);
//         } else {
//             console.log('No joke available');
//         }
//     })
//     .catch(error => {
//         // Yeh handle karega:
//         // - Network error (internet nahi hai)
//         // - API down (500 error)
//         // - 404 error
//         console.log('Something went wrong:', error.message);
//     });


// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response =>{
//   if(!response.ok){
//     throw new Error ('Error hai mari jaan' , response.status);
//   }
//   return response.json();
// })
// .then(data =>{
//   console.log(data);
// })
// .catch(err =>{
//   console.log(err);
// })


// POST request
// const userData = {
//   name : 'Mr.Robot',
//   suj : 'Hacking',
//   id : 101,
// }

// fetch('https://jsonplaceholder.typicode.com/users' , {
//   method: 'POST',
//   headers:{
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(userData)
// })
// .then((res)=>res.json())
// .then((data)=>console.log(data))
// .catch((err)=>console.log(err));


// const newData2 = {
//   title: 'My Post',
//   body: 'Content here',
//   userId: 1,
// }

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   headers:{
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(newData2)
// })
// .then(res=>res.json())
// .then(data=>console.log(data))
// .catch(err=>console.log(err));


// const newData3 ={
//   name : 'Ego',
//   age : 'Infinity',
//   job : 'fuck you',
// }
// fetch('https://jsonplaceholder.typicode.com/posts' , {
//   method: 'POST',
//   headers:{
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(newData3)
// })
// .then((resp)=>{
//   return resp.json();
// })
// .then((data)=>{
//   console.log(data);
// })
// .catch((err)=>{
//   console.log(err);
// });

//PUT request

// const updatedUser = {
//   name: 'Rahul Sharma',
//   email: 'rahul.sharma@example.com'
// };

// fetch('https://jsonplaceholder.typicode.com/users/1' , {
//   method:'PUT',
//   headers:{
//     'Content-Type':'application/json'
//   },
//   body: JSON.stringify(updatedUser)
// })
// .then(res => res.json())
// .then(data => console.log('Updated:', data))
// .catch(err => console.log('Error:', err));


// const updataUser2 = {
//   name : 'Saif',
//   email : 'khalid45231@gmail.com'
// }

// fetch('https://jsonplaceholder.typicode.com/users/1' , {
//   method: 'PUT',
//   headers:{
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(updataUser2)
// })
// .then((resp)=>{
//   return resp.json();
// })
// .then((data)=>{
//   console.log(data);
// })
// .catch((error)=>{
//   console.log(error);
// });

//DELETE request
// fetch('https://jsonplaceholder.typicode.com/users/5' , {
//   method:'DELETE'
// })
// .then((res)=>{
//   if(res.status === 200){
//     console.log('User Delete Successfully');
//   }else{
//     console.log('Delete Failed');
//   }
// })
// .catch(err => console.log('Error:', err));


// fetch('https://api.github.com/user', {
//     headers: {
//         'Authorization': 'Bearer YOUR_TOKEN_HERE',  // Authentication
//         'Content-Type': 'application/json',        // Data type
//         'Accept': 'application/json'               // Response type
//     }
// })
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(err => console.log('Error:', err));



//Error Handling
// fetch('https://api.github.com/users/unknownuser12345')
// .then((response)=>{
//   if(!response.ok){
//     throw new Error ('HTTP Error:', response.status);
//   }
//   return response.json();
// })
// .then((data)=>{
//   console.log(data);
// })
// .catch(err=>{
//   console.log(err.massage);
// });


// fetch('https://api.github.com/users/unknownuser12345')
// .then((response)=>{
//   if(!response.ok){
//     throw new Error('Error:', response.status);
//   }
//   return response.json();
// })
// .then((data)=>{
//   console.log(data);
// })
// .catch(err => console.log(err.massage));


// fetch('https://api.github.com/users/unknownuser12345')
// .then((response)=>{
//   if(!response.ok){
//     throw new Error ("Error: kuch to gadbad hai🥸", response.status);
//   }
//   return response.json();
// })
// .then((data)=>{
//   console.log(data);
// })
// .catch((error)=>{
//   console.log('Error 😈: ',error.massage);
// })


// Async/await version
// async function getGitHubUser() {
//     try{
//       const res = await fetch('https://api.github.com/users/octocat');

//       if (!res.ok){
//         throw new Error (`HTTP ERROR: ${res.status}`);
//       }

//       const data = await res.json();
//       console.log('Name:' , data.name);
//       console.log('Bio:' , data.bio);
//       return data;
//     } catch (error) {
//       console.log('Error:' ,error.message);
//     }
// }
// getGitHubUser();


// const dataLo = {
//   name : 'Saif',
//   height : '5ft 10in'
// }
// async function getResult() {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/posts' , {
        
//         method: 'POST',
//         headers:{
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(dataLo)
//       });

//       if (!response.ok){
//         throw new Error (`HTTP Error: ${response.status}`);
//       }

//       const data = await response.json();
//       console.log(data);
//       return data;
//     }catch(err){
//       console.log('error:', err);
//     }
// }
// getResult();


async function today01 () {
  try{
    const response = await fetch('https://api.github.com/users/octocat');

    if(!response.ok){
      throw new Error ('HTTP Error:', response.status);
    }

    const data = await response.json();
    console.log(data);
    return data;
  }catch(err){
    console.log('Error:',err.message);
  }
}
today01();