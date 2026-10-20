console.log('level -> 3 😎');

function log(ind , ...msg){
  return `[${ind}] ${msg.join(', ')}`;
}
console.log(log("INFO" , "Server started" , "Port 3000"));

function multiplyAll(mltp , ...rest){
  return rest.map((n) => mltp * n);
}
console.log(multiplyAll(2 , 3 , 4 , 5));

function pick(obj , ...rest){
  return rest.reduce((acc , n) => {
    if (n in obj) acc[n] = obj[n];
    return acc;
  },{});
}
