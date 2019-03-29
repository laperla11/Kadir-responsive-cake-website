//hamburger-menu
const iconEl = document.getElementById('hamburger-button');
iconEl.addEventListener('click', () => {
    topNavEl = document.getElementById('top-nav');
    if (topNavEl.className === 'top-navigation-bar') {
        topNavEl.className += ' dropdown'
    } else {
        topNavEl.className = 'top-navigation-bar'
    }
});

//changing carousel picture with clicking the thumbnails under the picture
//access carousel image element
const carouselImage = document.getElementById('carousel-image');
//access the onclick thumbnails area
const onclickThumbnailBtn = document.querySelector('.carousel-thumbnails-wrapper');
//adding event listener
onclickThumbnailBtn.addEventListener('click', (event) => {
    //assigning carousel picture to the onclicked thumbnail
    carouselImage.src = event.target.src;
})

//changing carousel picture with the 'previuos' and 'next' buttons
//find the click buttons
const carouselButtons = document.querySelectorAll('.carousel-button');
//adding event listeners to both buttons
carouselButtons.forEach(button => {
    button.addEventListener('click', changeImage);
})

function changeImage(event) {
    thumbnails = document.querySelectorAll('.thumbnail');
    clickedButton = event.target.innerText;
    currentCarouselSrc = carouselImage.src;
    thumbnails.forEach((thumbnail, i) => {
        if (currentCarouselSrc === thumbnail.src) {
            if (clickedButton === '❮') {
                getPreviousImage(i);
            } else {
                getNextImage(i)
            }
        }
    });
}
function getPreviousImage(index) {
    if (index === 0) {
        previousImage = thumbnails[thumbnails.length - 1].src;
    } else {
        previousImage = thumbnails[index - 1].src;
    }
    return carouselImage.src = previousImage;
}

function getNextImage(index) {
    if (index === thumbnails.length - 1) {
        nextImage = thumbnails[0].src;
    } else {
        nextImage = thumbnails[index + 1].src;
    }
    return carouselImage.src = nextImage;
}

