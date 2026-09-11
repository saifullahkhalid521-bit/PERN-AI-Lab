
async function fetcHeKrDe() {
    try{
      const [user , post] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res =>{
          if(!res.ok){
            throw new Error (`HTTP Error: ${res.status}`)
          }
          return res.json();
        }),

        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => {
          if(!res.ok){
            throw new Error (`HTTP Error: ${res.status}`)
          }
          return res.json();
        })
      ]);
      console.log("User😁: ",user[0].name);
      console.log("Posts😎: ", post[0].title);
    }catch(err){
      console.log(err.message);
    }
}
fetcHeKrDe();