const addBtn = document.querySelector("#addbtn");
const areadiv = document.querySelector(".area");
const text = document.querySelector(".text");

// 1. Load existing items from localStorage on page load (or start with an empty array)
let notes = JSON.parse(localStorage.getItem("notes")) || [];

// Function to render the list on the screen
function renderNotes() {
  areadiv.innerHTML = notes.map(note => `<li>${note}</li>`).join("");
}

// Render immediately when the script loads so saved items show up!
renderNotes();

addBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Stops form from refreshing the page
  
  const userInput = text.value.trim();
  if (!userInput) return; // Ignore empty inputs

  // 2. Push the new item into our array
  notes.push(userInput);

  // 3. Save the updated array to localStorage as a string
  localStorage.setItem("notes", JSON.stringify(notes));

  // 4. Re-render the list to show the new item
  renderNotes();

  // Clear the input box
  text.value = "";
});