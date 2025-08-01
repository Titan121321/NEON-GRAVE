const gif = document.getElementById("gif");
const overlay = document.getElementById("overlay");
const audio = document.getElementById("audio");


let isPlaying = false;

gif.addEventListener("click", () => {
  overlay.style.display = "flex";

  if (!isPlaying) {
    audio.play();
    isPlaying = true;
  } else {
    audio.pause();
    isPlaying = false;
  }
});