document.getElementById('nextBtn').addEventListener('click', () => {
  const audio = document.getElementById('loop-audio');
  audio.play();

  document.querySelector('.quote').classList.remove('hidden');
  document.getElementById('welcomeBtn').classList.remove('hidden');
  document.getElementById('nextBtn').classList.add('hidden');
});

document.getElementById('welcomeBtn').addEventListener('click', () => {
  window.location.href = "end.html";
});

