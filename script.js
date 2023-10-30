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
    const candyEmoji = document.createElement('div');
    candyEmoji.textContent = '🍬';
    candyEmoji.style.position = 'absolute';
    candyEmoji.style.left = event.touches[0].clientX + 'px';
    candyEmoji.style.top = event.touches[0].clientY + 'px';
    candyEmoji.style.fontSize = '24px'; // Adjust the size as needed
    document.body.appendChild(candyEmoji);
});
