const content = document.getElementById('content');
const refreshButton = document.getElementById('refreshButton');

const images = [];
const numImages = 34;
const numGifs = 4;

for (let i = 1; i <= numImages; i++) {
    images.push(`images/${i}.jpg`);
}

for (let i = 1; i <= numGifs; i++) {
    images.push(`images/${i}.gif`);
}

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function displayRandomImage() {
    const randomImage = getRandomItem(images);
    const imageUrl = window.location.href + randomImage;
    content.innerHTML = `<img src="${imageUrl}" alt="Image" class="fixed-height">`;
      // Check if the image file extension is ".gif"
    if (randomImage.endsWith('.gif')) {
        // Change the button color to dark red
        refreshButton.style.backgroundColor = 'darkred';
    } else {
        // Reset the button color to its regular color
        refreshButton.style.backgroundColor = '#FF8C00';
    }
}

refreshButton.addEventListener('click', displayRandomImage);
displayRandomImage();

document.addEventListener('touchstart', (event) => {
    const emojiOptions = ['🎃', '👻', '🦇', '🕷️', '🍭', '🕸️', '🦉', '🌕', '🍬', '🩸', '🧛‍♂️', '⚰️', '🧟'];
    const randomEmoji = emojiOptions[Math.floor(Math.random() * emojiOptions.length)];
    const candyEmoji = document.createElement('div');
    candyEmoji.textContent = randomEmoji;
    candyEmoji.classList.add('candy-emoji');
    document.body.appendChild(candyEmoji);

    const x = event.touches[0].clientX;
    const y = event.touches[0].clientY;
    candyEmoji.style.left = x - candyEmoji.offsetWidth / 2 + 'px';
    candyEmoji.style.top = y + 'px';

    setTimeout(() => {
        candyEmoji.style.transform = 'scale(2) translateY(100vh)';
        candyEmoji.style.opacity = '0';
    }, 2000); // Adjust the duration as needed
});

document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});