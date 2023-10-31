const content = document.getElementById('content');
const refreshButton = document.getElementById('refreshButton');

const images = [];
const numImages = 20;

for (let i = 1; i <= numImages; i++) {
    images.push(`images/${i}.jpg`);
}

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function displayRandomImage() {
    const randomImage = getRandomItem(images);
    const imageUrl = window.location.href + randomImage;

    content.innerHTML = `<img src="${imageUrl}" alt="Image" class="fixed-height">`;
}

refreshButton.addEventListener('click', displayRandomImage);
displayRandomImage();

document.addEventListener('touchstart', (event) => {
    const emojiOptions = ['🎃', '👻', '🦇', '🕷️', '🍭', '🕸️', '🦉', '🌕', '🍬', '🧛‍♂️', '⚰️', '🧟'];
    const randomEmoji = emojiOptions[Math.floor(Math.random() * emojiOptions.length)];
    const candyEmoji = document.createElement('div');
    candyEmoji.textContent = randomEmoji;
    candyEmoji.classList.add('candy-emoji');
    document.body.appendChild(candyEmoji);

    const x = event.touches[0].clientX;
    const y = event.touches[0].clientY;
    candyEmoji.style.left = x + 'px';
    candyEmoji.style.top = y + 'px';

    setTimeout(() => {
        candyEmoji.style.transform = 'scale(2) translateY(100vh)';
        candyEmoji.style.opacity = '0';
    }, 2000); // Adjust the duration as needed
});

// Add the code for the "Happy Halloween from FASO" message here
window.addEventListener('load', function() {
    setTimeout(function() {
        var halloweenMessage = document.getElementById('halloweenMessage');
        halloweenMessage.style.animation = 'fadeOut 1s linear';
    }, 7000); // animation delay (ms)
});
