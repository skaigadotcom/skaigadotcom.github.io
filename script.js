const content = document.getElementById('content');
const refreshButton = document.getElementById('refreshButton');

// Create an array of image filenames in your "images" folder using a for loop
const images = [];
const numImages = 9; // Change this to the total number of images

for (let i = 1; i <= numImages; i++) {
    images.push(`images/${i}.jpg`);
}

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function displayRandomImage() {
    const randomImage = getRandomItem(images);
    const imageUrl = window.location.href + randomImage;

    content.innerHTML = `<img src="${imageUrl}" alt="Image">`;
}

refreshButton.addEventListener('click', displayRandomImage);
displayRandomImage();
