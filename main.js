document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("menu-btn");
    const menu = document.getElementById("menu");

    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  });
  const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");


const playBtn = document.getElementById("playBtn");
const audio = document.getElementById("audio");
const time = document.getElementById("time");

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "❚❚";n
  } else {
    audio.pause();
    playBtn.textContent = "▶";
  }
});
audio.addEventListener("loadedmetadata", () => {
  const minutes = Math.floor(audio.duration / 60);
  const seconds = Math.floor(audio.duration % 60)
    .toString()
    .padStart(2, "0");
  time.textContent = `${minutes}:${seconds}`;
});
