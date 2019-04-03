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
//access all thumbnails
const thumbnails = document.querySelectorAll('.thumbnail');
//adding event listener thumbnail wrapaer
onclickThumbnailBtn.addEventListener('click', (event) => {
    clearHighlight();
    //assigning carousel picture to the onclicked thumbnail
    carouselImage.src = event.target.src;
    getHighlighted(event.target);
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
    clearHighlight();
    thumbnails.forEach((thumbnail, i) => {
        if (currentCarouselSrc === thumbnail.src) {
            newCarousel = ((clickedButton === '❮') ?
                getPreviousImage(i) : getNextImage(i)
            )
        }
    });
    carouselImage.src = newCarousel.src;
    getHighlighted(newCarousel);
}
function getPreviousImage(index) {
    return (index === 0 ? thumbnails[thumbnails.length - 1] : thumbnails[index - 1]);
}

function getNextImage(index) {
    return ((index === thumbnails.length - 1) ? thumbnails[0] : thumbnails[index + 1]);
}
//function highlighting clicked thumbnail
function getHighlighted(element) {
    element.style.border = '3px solid #FF686B';
}
//function clearing the hightllight around thumbnails
function clearHighlight() {
    thumbnails.forEach(thumbnail => {
        thumbnail.style.border = '2px solid white';
    })
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
}
//monitoring the drag move
function dragAction(e) {
    var touch = e.touches[0];
    var changes = posXInitial - touch.clientX;
    if (changes < 0) {
        return;
    }
}
//implementing bslide action
function dragEnd(e) {
    var change = posXInitial - e.changedTouches[0].clientX;
    var threshold = screen.width / 5;
    currentCarouselSrc = carouselImage.src;
    clearHighlight();
    thumbnails.forEach((thumbnail, i) => {
        if (currentCarouselSrc === thumbnail.src) {
            if (change < -threshold) {
                newCarousel = getPreviousImage(i);
            } else if (change > threshold) {
                newCarousel = getNextImage(i);
            } else {
                return;
            }
        }
    });
    carouselImage.src = newCarousel.src;
    getHighlighted(newCarousel);
}