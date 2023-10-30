const content = document.getElementById('content');
const refreshButton = document.getElementById('refreshButton');

// Array of image filenames in your "images" folder
const images = [
    'images/meme1.jpg',
    'images/meme2.jpg',
    'images/spooky1.jpg',
    'images/spooky2.jpg'
    // Add more image filenames here
];

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function displayRandomContent() {
    const random = Math.random();
    const randomImage = getRandomItem(images);
    const imageUrl = window.location.href + randomImage;

    if (random < 0.5) {
        content.innerHTML = `<img src="${imageUrl}" alt="Meme">`;
    } else {
        content.innerHTML = `<img src="${imageUrl}" alt="Spooky Pic">`;
    }
}

refreshButton.addEventListener('click', displayRandomContent);
displayRandomContent();
