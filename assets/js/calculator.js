// Select all Buttons, add Event Listener to playSound when Clicked
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', playSound);
  button.addEventListener('click', updateDisplay);
});

function playSound() {
  const audio = document.querySelector('audio');
  audio.currentTime = 0;
  audio.play();
}

// Update Display when Button is Pressed
const display = document.querySelector('#display');

function updateDisplay() {
  console.log(textContent.length);
  if (this.textContent === "clear") {
    display.textContent = "";
  } else if (this.textContent === "=") {
    display.textContent = calculate();
  } else {
    display.textContent += this.textContent;
  }
}

// Calculate
function calculate() {
  return eval(display.textContent).toFixed(2);
}
