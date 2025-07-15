//your JS code here. If required.
// Get the element with id="level"
let target = document.getElementById("level");

// Initialize level counter
let level = 0;

// Traverse up the DOM tree
while (target) {
  level++;
  target = target.parentElement;
}

// Show result in an alert
alert("The level of the element is: " + level);
