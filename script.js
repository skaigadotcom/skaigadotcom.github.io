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

document.addEventListener('DOMContentLoaded', () => {
    const candy = document.querySelector('.falling-candy');

    // Set initial random horizontal velocity
    const randomHorizontalVelocity = Math.random() > 0.5 ? '2px' : '-2px';
    candy.style.setProperty('--horizontal-velocity', randomHorizontalVelocity);

    // Set initial random vertical velocity
    const initialVerticalVelocity = Math.random() * 4 - 8;
    candy.style.transform = `translateY(-10vh) translateX(${randomHorizontalVelocity})`;

    // Apply the falling animation
    candy.style.animation = `candy-fall ${Math.random() * 3 + 2}s ease-in infinite`;

    // Add click event to reposition the candy
    document.addEventListener('click', (e) => {
        const touchX = e.clientX;
        candy.style.transform = `translate(${touchX}px, -10vh)`;
    });
});
