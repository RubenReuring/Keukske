
$(document).ready(function() {

    let reviewsSplide = new Splide(".hri-splide", {
        type: "fade",
        rewind: true,
        perPage: 1,
        perMove: 1,
        pagination: false,
        rewind: true,
        classes: {
            arrows: "splide__arrows hri-controls",
            arrow: "splide__arrow hri-arrow_button",
            prev: "splide__arrow--prev hri-arrow_button.prev",
            next: "splide__arrow--next hri-arrow_button.next",
        },
    }).mount();

});


