let container = document.querySelector(".container");
let btn = document.getElementById("click-button");
let Count_number = 0;
let CountRound = 0;

btn.onclick = function () {
  if (CountRound === 0) {
    CountRound++;
    rotateWheel();
    setTimeout(FirstResult, 4000);
  } else if (CountRound === 1) {
    CountRound++;
    rotateWheel();
    setTimeout(displayLastelementnotIndex, 4000);
  }
}


function displayLastelementnotIndex() {
  const divElements = document.querySelectorAll(".container div");
  let lastDiv = divElements[divElements.length - 1];
  let stopValue = lastDiv.textContent;
  document.querySelector(".result").textContent = " Congrats! You won a " + stopValue + " gift card!";
}


function rotateWheel() {
  Count_number = Count_number + Math.ceil(Math.random() * 10000);
  container.style.transform = "rotate(" + Count_number + "deg)";
}


function FirstResult() {
  document.querySelector(".result").textContent = "Try Again...";
}