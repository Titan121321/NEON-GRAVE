const messages = [
  "Welcome to the game!",
  "Your mission begins here.",
  "Use the arrow to continue.",
  "Complete all your quests.",
  "Good luck, adventurer!"
];

let currentIndex = 0;
const messageElement = document.getElementById("message");
const nextButton = document.getElementById("next-btn");

function updateMessage() {
  messageElement.textContent = messages[currentIndex];
}

nextButton.addEventListener("click", () => {
  if (currentIndex < messages.length - 1) {
    currentIndex++;
    updateMessage();
  } else {
    nextButton.disabled = true;
    nextButton.style.opacity = 0.4;
  }
});

updateMessage(); 
