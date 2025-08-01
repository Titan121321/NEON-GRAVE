const storyLines = [
  "So you find yourself in this strange place", // NEW LINE at index 0
  "Once upon a time you were human.",                       // 1
  "You had everything one could ask for, yet you threw it all away.",   // 2
  "Out of all the choices to be made, you choose to hurt and destroy the lives of the ones around you.", // 3
  "For your crimes you were executed but a copy of your mind was stored as an engram. A digital consciousness if you will.", // 4
  "Your engram was stored to be tortured for the entertainment of the citizens of Alpha Centauri.", // 5
  "Now even that time has come to an end. It's time for your final act.", // 6 → change video
  "Will you satisfy the morbid pleasure of the great ones", // 7 → show choices
  "Did you really think you had a choice? You are nothing but lines of code awaiting its impending doom.", // 8b → if refuse
  "Do you wish to know the rules of the game?",             // 9 → show yes/no again
  "Soon you will be handed a virus. It may or may not have the power to delete an engram from existence.", // 10a
  "You can either use it on yourself or your enemy (someone in the same position as you). In both cases it has a 50 percent chance to be lethal. If you survive you earn your freedom.", // 11b
];

let index = 0;
const textElement = document.getElementById('story-text');
const nextBtn = document.getElementById('next-btn');
const leftVideo = document.getElementById('leftVideo');
const optionA = document.getElementById('option-a');
const optionB = document.getElementById('option-b');

function updateText() {
  textElement.textContent = storyLines[index];

  // Line 6 → Change video
  if (index === 6) {
    leftVideo.src = "game assets/overwatch red.mp4";
    leftVideo.load();
    leftVideo.play();
  }

  // Line 7 → Show choices
  if (index === 7) {
    nextBtn.style.display = 'none';
    optionA.style.display = 'inline-block';
    optionA.textContent = "yes";
    optionB.style.display = 'inline-block';
    optionB.textContent = "no";
    return;
  }

  // Line 9 → Show yes/no again (after refusing)
  if (index === 9) {
    nextBtn.style.display = 'none';
    optionA.style.display = 'inline-block';
    optionA.textContent = "Yes";
    optionB.style.display = 'inline-block';
    optionB.textContent = "No";
    return;
  }

  // Line 11 → redirect after a short delay
  if (index === 11) {
    setTimeout(() => {
      window.open("game.html", "_blank");
    }); // 3 seconds delay to let player read the final message
  }

  // Default state
  optionA.style.display = 'none';
  optionB.style.display = 'none';
  nextBtn.style.display = 'inline-block';
}

// Initial load
updateText();

nextBtn.addEventListener('click', () => {
  index++;
  updateText();
});

optionA.addEventListener('click', () => {
  if (index === 7) {
    index = 10; // Accepted — show rule 1
  } else if (index === 9) {
    index = 10; // Accepted after refusal
  }
  updateText();
});

optionB.addEventListener('click', () => {
  if (index === 7) {
    index = 8; // Refused — show denial/punishment line
  } else if (index === 9) {
    window.open("game.html", "_blank");
    return;
  }
  updateText();
});

// Auto-play background music
window.addEventListener('click', () => {
  const music = document.getElementById('bg-music');
  music.play().catch(err => console.log('Autoplay failed:', err));
}, { once: true });
