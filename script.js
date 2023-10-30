const content = document.getElementById('content');
const refreshButton = document.getElementById('refreshButton');

const images = [];
const numImages = 13;

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
