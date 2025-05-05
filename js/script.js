var carouselElement = document.getElementById("carouselExampleCaptions");
var carouselInstance = bootstrap.Carousel.getInstance(carouselElement);
if (!carouselInstance) {
    carouselInstance = new bootstrap.Carousel(carouselElement, {
        ride: "carousel",
        wrap: true
    });
}

var video = document.getElementById("carouselVideo");
if (video) {
    video.addEventListener("ended", function () {
        carouselInstance.next();
    });
}

carouselElement.addEventListener('slid.bs.carousel', function (event) {
    var currentSlide = event.relatedTarget;
    if (currentSlide && currentSlide.querySelector("#carouselVideo")) {
        // If the new slide has a video, reset and play it.
        video.currentTime = 0;
        video.play();
    } else {
        // If there is no video, move to the next slide after 3000ms.
        setTimeout(function () {
            carouselInstance.next();
        }, 3000);
    }
});