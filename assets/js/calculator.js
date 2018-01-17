// Select all Buttons, add Event Listener to playSound when Clicked
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', playSound);
});

function playSound() {
  const audio = document.querySelector('audio');
  audio.currentTime = 0;
  audio.play();
}
