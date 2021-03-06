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
var carouselImage = document.getElementById('carousel-image');
//access the onclick thumbnails area
const thumbnails = document.querySelectorAll('.thumbnail');

const onclickThumbnailBtn = document.querySelector('.carousel-thumbnails-wrapper');
//adding event listener
onclickThumbnailBtn.addEventListener('click', (event) => {
    //delete the previous border
    thumbnails.forEach(thumbnail => {
        // console.log(thumbnail)
        thumbnail.style.border = '3px solid white';
    });
    //assigning carousel picture to the onclicked thumbnail
    carouselImage.src = event.target.src;
    event.target.style.border = '3px solid #FFA69E'
})

//changing carousel picture with the 'previuos' and 'next' buttons
//find the click buttons
const carouselButtons = document.querySelectorAll('.carousel-button');
//adding event listeners to both buttons
carouselButtons.forEach(button => {
    button.addEventListener('click', changeImage);
})


function changeImage(event) {
    clickedButton = event.target.innerText;
    currentCarouselSrc = carouselImage.src;
    thumbnails.forEach((thumbnail, i) => {
        thumbnail.style.border = '3px solid white';
        if (currentCarouselSrc === thumbnail.src) {
            if (clickedButton === '❮') {
                changedCarousel = getPreviousImage(i);
            } else {
                changedCarousel = getNextImage(i);
            }
        }
    });
    changedCarousel.style.border = '3px solid #FFA69E';
    carouselImage.src = changedCarousel.src;
}
function getPreviousImage(index) {
    if (index === 0) {
        previousImage = thumbnails[thumbnails.length - 1];
    } else {
        previousImage = thumbnails[index - 1];
    }
    return previousImage;
}

function getNextImage(index) {
    if (index === thumbnails.length - 1) {
        nextImage = thumbnails[0];
    } else {
        nextImage = thumbnails[index + 1];
    }
    return nextImage;
}
//adding touch events for mobile devices
carouselImage.addEventListener('touchstart', dragStart);
carouselImage.addEventListener('touchend', dragEnd);
carouselImage.addEventListener('touchmove', dragAction);
//event listeners
//finding initial X position
var posXInitial;
function dragStart(e) {
    e.preventDefault();
    posXInitial = e.touches[0].clientX;
    console.log(posXInitial)
}
//monitoring the drag move
function dragAction(e) {
    var touch = e.touches[0];
    var changes = posXInitial - touch.clientX;
    if (changes < 0) {
        return;
    }
    console.log(touch, changes)
}
//implementing bslide action
function dragEnd(e) {
    var change = posXInitial - e.changedTouches[0].clientX;
    var threshold = screen.width / 4;
    currentCarouselSrc = carouselImage.src;
    thumbnails.forEach((thumbnail, i) => {
        if (currentCarouselSrc === thumbnail.src) {
            if (change < -threshold) {
                getPreviousImage(i);
            } else if (change > threshold) {
                getNextImage(i);
            } else {
                return;
            }
        }
    });
}
