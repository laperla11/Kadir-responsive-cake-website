//hamburger-menu
var iconEl = document.getElementById('hamburger-button');
iconEl.addEventListener('click', () => {
    topNavEl = document.getElementById('top-nav');
    if (topNavEl.className === 'top-navigation-bar') {
        topNavEl.className += ' dropdown'
    } else {
        topNavEl.className = 'top-navigation-bar'
    }
});

//changing carousel picture
//access carousel image element
var carouselPicture = document.getElementById('carousel-picture');
//access the onclick thumbnails area
var onclickThumbnailBtn = document.querySelector('.carousel-thumbnails-wrapper');
//adding event listener
onclickThumbnailBtn.addEventListener('click', (event) => {
    //assigning carousel picture to the onclicked thumbnail
    carouselPicture.src = event.target.src;
})