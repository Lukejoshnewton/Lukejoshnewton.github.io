// Function to rotate images
function rotateImages() {
    var imgContainer = document.querySelector('.imgBx');
    var images = imgContainer.querySelectorAll('img');
    var firstImage = images[0];
    var secondImage = images[1];

    // Toggle the opacity of images
    if (firstImage.style.opacity === '0') {
        firstImage.style.opacity = '1';
        secondImage.style.opacity = '0';
    } else {
        firstImage.style.opacity = '0';
        secondImage.style.opacity = '1';
    }
}

// Call the rotateImages function every 3 seconds
setInterval(rotateImages, 3000);