let count = 0;

function increaseCount() {
  count++; // by 1
  displayCount(); // call the function to update the display
  checkCountValue(); // call the function to check if the count meets the criteria
}

function displayCount() {
  document.getElementById("countDisplay").innerHTML = count;
}

function checkCountValue() {
  if (count == 10) {
    alert("Congratulations on reaching 10 followers!");
  } else if (count == 20) {
    alert("Congratulations on reaching 20 followers! Keep it up!");
  }
}

function resetCount() {
  count = 0;
  displayCount();
  checkCountValue();
}
