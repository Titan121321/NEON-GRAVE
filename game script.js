const btnSpare = document.getElementById('btn1'); // Spare → Self
const btnKill = document.getElementById('btn2');  // Kill → Opponent

function coinFlip() {
  // Adds time-based entropy for better randomness feeling
  return Math.floor((Math.random() + performance.now() % 1) * 1000) % 2 === 0;
}

// Kill → Opponent
btnKill.addEventListener('click', () => {
  const isLethal = coinFlip();

  if (isLethal) {
    window.location.href = "ESCAPE HTML.html"; // opponent dies
  } else {
    window.location.href = "death.html"; // gun misfires
  }
});

// Spare → Self
btnSpare.addEventListener('click', () => {
  const isLethal = coinFlip();

  if (isLethal) {
    window.location.href = "death.html"; // user dies
  } else {
    window.location.href = "ESCAPE HTML.html"; // user lives
  }
});
