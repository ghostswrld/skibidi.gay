const musicButton = document.getElementById('musicplayer');
const audio = document.getElementById('audio');

musicplayer.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    audio.loop();
  } else {
    audio.pause();
  }
});
