// Get the input element
var searchInput = document.getElementById("search-input");

// Array of placeholder texts
var placeholderTexts = [
  "Search for courses",
  "Find educators",
  "Explore test series"
];

// Function to randomly select a placeholder text
function setRandomPlaceholderText() {
  var randomIndex = Math.floor(Math.random() * placeholderTexts.length);
  searchInput.placeholder = placeholderTexts[randomIndex];
}

// Call the function initially
setRandomPlaceholderText();

// Call the function every 3 seconds to change the placeholder text
setInterval(function() {
  setRandomPlaceholderText();
}, 1500);
