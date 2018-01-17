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

let lastButtonPressed;

const acceptableDecimals = new RegExp(/[1-9]+\.[1-9]*$/, 'g');

function updateDisplay() {
  clearAfterOperation();
  switch(this.textContent) {
    case "clear":
      clear();
      break;
    case "del":
      backspace();
      break;
    case "=":
      calculate();
      break;
    case ".":
      if(!display.textContent.match(acceptableDecimals)) {
        display.textContent += this.textContent;
      }
      break;
    default:
      display.textContent += this.textContent;
  }
  lastButtonPressed = this.textContent;
}



function clear() {
  display.textContent = "";
}

function clearAfterOperation() {
  if (lastButtonPressed === "=") {
    clear();
  }
}

function backspace() {
  if (display.textContent === "ERROR") {
    clear();
  }
  display.textContent = display.textContent
                               .slice
                               (0, display.textContent.length - 1);
}

function calculate() {
  try {
    display.textContent = eval(display.textContent).toFixed(2);
  }
  catch(error) {
    display.textContent = "ERROR";
  }
}

// Press Buttons for Keyboard
window.addEventListener('keydown', clickButton);

function clickButton(e) {
  if (e.shiftKey && e.keyCode == 187) {
    document.querySelector(`.add`).click();
  } else if (e.shiftKey && e.keyCode == 56) {
    document.querySelector(`.multiply`).click();
  } else {
    document.querySelector(`button[data-key="${e.keyCode}"]`).click();
  }
}
