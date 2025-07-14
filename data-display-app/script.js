// Sample data: an array of youTubers
const youTubers = [
    {
        name: "Markiplier",
        subscribers: 37500000,
        age: 35
    },
    {
        name: "jacksepticeye",
        subscribers: 31000000,
        age: 35
    },
    {
        name: "Pewdiepie",
        subscribers: 110000000,
        age: 35
    },
    {
        name: "Alex Wassabi",
        subscribers: 11400000,
        age: 35
    },
]
// Get the container element from index.html
const container = document.getElementById("data-container");

// Loop through each book object in the array
for (const youTuber of youTubers) {

  // 1. Create a wrapper div for this book
  const card = document.createElement("div");
  card.classList.add("item-card");

  // 2. Create an element for the book title
  const titleEl = document.createElement("h2");
  titleEl.classList.add("item-title");
  titleEl.textContent = youTuber.name;

  // 3. Create a paragraph for author and year
  const detailsEl = document.createElement("p");
  detailsEl.classList.add("item-details");
  detailsEl.textContent = `by ${youTuber.subscribers} (${youTuber.age})`;

  // 4. Put title and details inside the card
  card.appendChild(nameEl);
  card.appendChild(detailsEl);

  // 5. Add this card to the main container
  container.appendChild(card);
}

if (youTubers.length === 0) {
  const emptyMsg = document.createElement("p");
  emptyMsg.textContent = "No youTubers to display right now.";
  container.appendChild(emptyMsg);
} else {
  for (const youTuber of youTubers) {
    // ... (existing loop code) ...
  }
}
