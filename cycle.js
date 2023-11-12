const words = ["hope", "breathe", "live", "sing", "trust"];

const elem = document.getElementById("cyclical");
elem.style.height = '275px';
elem.style.overflow = 'hidden';

let currentWordIndex = 0;

function cycleWords() {
  const currentWord = words[currentWordIndex];
  elem.innerText = currentWord
  elem.dataset.text = currentWord
  currentWordIndex = (currentWordIndex + 1) % words.length;
}

setInterval(cycleWords, 750);