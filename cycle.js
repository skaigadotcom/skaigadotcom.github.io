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

function cycleWords() {
  const word = words[w];
  elem.innerText = word
  elem.dataset.text = word
  w = (w + 1) % words.length;
}

let w = 0;
setInterval(cycleWords, 300);