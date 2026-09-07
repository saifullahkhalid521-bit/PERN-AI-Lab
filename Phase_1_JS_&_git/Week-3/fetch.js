fetch('https://v2.jokeapi.dev/joke/Any?type=single')
.then(Response =>{
  return Response.json();
})
.then((data)=>{
  console.log(data.joke);
})
.catch((err)=>{
  console.log('ERROR: ', err);
});


// Agar joke API down ho
fetch('https://v2.jokeapi.dev/joke/Any?type=single')
    .then(response => {
        console.log('Status:', response.status);  // 200 (agar up hai)
        console.log('OK?', response.ok);          // true
        
        if (!response.ok) {
            throw new Error(`API Down! Status:  ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        if (data.joke) {
            console.log('😂', data.joke);
        } else {
            console.log('No joke available');
        }
    })
    .catch(error => {
        // Yeh handle karega:
        // - Network error (internet nahi hai)
        // - API down (500 error)
        // - 404 error
        console.log('Something went wrong:', error.message);
    });


fetch('https://jsonplaceholder.typicode.com/users')
.then(response =>{
  if(!response.ok){
    throw new Error ('Error hai mari jaan' , response.status);
  }
  return response.json();
})
.then(data =>{
  console.log(data);
})
.catch(err =>{
  console.log(err);
})
