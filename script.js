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
    candyEmoji.classList.add('candy-emoji');
    document.body.appendChild(candyEmoji);

    const x = event.touches[0].clientX;
    const y = event.touches[0].clientY;
    candyEmoji.style.left = x + 'px';
    candyEmoji.style.top = y + 'px';

    const startTime = performance.now(); // Get the start time in milliseconds
    const initialY = y;
    const duration = 2000; // Adjust the duration as needed
    const gravity = 9.8; // Acceleration due to gravity in m/s^2

    function updatePosition() {
        const currentTime = performance.now();
        const elapsed = currentTime - startTime;
        const newY = initialY + 0.5 * gravity * (elapsed / 1000) ** 2;
        candyEmoji.style.top = newY + 'px';

        if (elapsed < duration) {
            requestAnimationFrame(updatePosition);
        } else {
            candyEmoji.remove(); // Remove the emoji when the animation is complete
        }
    }

    requestAnimationFrame(updatePosition);
});
