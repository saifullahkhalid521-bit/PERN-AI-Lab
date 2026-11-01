const container = document.querySelector(".container");

const products = [
  { id: 1, name: "Wireless Mouse", category: "Electronics", price: 25 },
  { id: 2, name: "Coffee Mug", category: "Kitchen", price: 12 },
  { id: 3, name: "Mechanical Keyboard", category: "Electronics", price: 75 }
];
console.log("JS connected!")

function renderProduct () {
  products.map(ele => {
    container.innerHTML+= `        
              <div class="box">
                <h2>${ele.name}</h2>
                <h3>category: ${ele.category}</h3>
                <p>$${ele.price}</p>
              </div>
    `
  }).join("");
}

// Clean version
// function renderProduct() {
//   container.innerHTML = products.map(ele => `
//     <div class="box">
//       <h2>${ele.name}</h2>
//       <h3>category: ${ele.category}</h3>
//       <p>$${ele.price}</p>
//     </div>
//   `).join("");
// }
// renderProduct();

renderProduct();