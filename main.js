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
carouselButtons.forEach(button => {
    button.addEventListener('click', changePicture);
})

function changePicture(event) {
    allThumbnails = document.querySelectorAll('.thumbnail');
    clickedButton = event.target.innerText;
    currentCarouselSrc = carouselImage.src;
    if (clickedButton === '❮') {
        allThumbnails.forEach((thumbnail, i) => {
            if (currentCarouselSrc === thumbnail.src) {
                if (i === 0) {
                    previousImage = allThumbnails[allThumbnails.length - 1].src;
                } else {
                    previousImage = allThumbnails[i - 1].src;
                }
            }
        })
        carouselImage.src = previousImage;
    } else {
        allThumbnails.forEach((thumbnail, i) => {
            if (currentCarouselSrc === thumbnail.src) {
                if (i === allThumbnails.length - 1) {
                    nextImage = allThumbnails[0].src;
                } else {
                    nextImage = allThumbnails[i + 1].src;
                }
            }
        })
        carouselImage.src = nextImage;
    }
}