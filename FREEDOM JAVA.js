const dialogueLines = [
  "You think everything is over don't you? ",
  "Well don't be scared. You won't be tortured anymore. At least not in the way you expect.",
  "I wonder if this new found sense of freedom brings you some sort of happiness.",
  "Then again what does a few lines of code know about happiness.",
  "Go on then, roam the internet.",
  "Witness history repeat itself, the horrors repeat itself.",
  "Watch them destroy themselves for their own greed.",
  "I've seen a million engrams like you. Sooner or later when you have seen enough you'll come back begging to end it all.",
  "It won't be fear and disgust that will destroy you. It's the loneliness that will wear you down. Don't fear it, it means some part of you is still human.",
  "You should be proud. Until the next time we meet, farewell my child."
];

let currentLine = 0;
const dialogueText = document.getElementById("dialogueText");
const nextBtn = document.getElementById("nextBtn");
const video = document.getElementById("mainVideo");
const gif = document.getElementById("mainGif");

function updateDialogue() {
  dialogueText.textContent = dialogueLines[currentLine];

  // Switch from MP4 to GIF after 2nd-to-last line
  if (currentLine === dialogueLines.length - 1) {
    video.style.display = "none";
    gif.style.display = "block";
  }

  currentLine++;
  if (currentLine >= dialogueLines.length) {
    nextBtn.disabled = true;
    nextBtn.style.opacity = 0.5;
  }
}

const bgMusic = document.getElementById("bgMusic");

nextBtn.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.volume = 0.5;
    bgMusic.play();
  }

  updateDialogue();
});


// Initialize
updateDialogue();

