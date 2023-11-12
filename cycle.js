const words =  ["hope", "fear", 
                "live", "die", 
                "sing", "scream", 
                "trust", "doubt",
                "try", "fail",
                "leap", "fall",
                "laugh", "cry",
                "love", "hate",
                "feel", "numb"];

const elem = document.getElementById("cyclical");

let currentWordIndex = 0;

function cycleWords() {
  const currentWord = words[currentWordIndex];
  elem.innerText = currentWord
  elem.dataset.text = currentWord
  currentWordIndex = (currentWordIndex + 1) % words.length;
}

setInterval(cycleWords, 300);