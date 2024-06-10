// Service Slider Numbering
let hpsIndex;
$('.hps-item').each(function(){
    hpsIndex = $(this).index();
    hpsNumber = hpsIndex + 1
    if(hpsNumber < 10){
        $(this).find('.hnd-item__numberselector').text('0' + hpsNumber)
    } else {
        $(this).find('.hnd-item__numberselector').text(hpsNumber)
    }
})
// Service Slider Splide
let werkwijzeSplide = new Splide( '.hps-wrapper', {
    perPage: 1,
    perMove: 1,
    autoWidth: true,
    arrows: false,
    gap: '2em',
    focus  : 'left',
    drag: 'free',
    pagination: false,
    snap: false,
    breakpoints: {
        992: {
            gap: '1.5em',
        },
    }
} ).mount();


let valuesSlider =  new Splide('.home-values-slider', {
    perPage: 1,
    perMove: 1,
    autoWidth: true,
    arrows: false,
    gap: '2em',
    focus  : 'left',
    drag: 'free',
    pagination: false,
    snap: false,
    breakpoints: {
        992: {
            gap: '1.5em',
        },
    }
}).mount();

//Review Splide
let reviewsSplide = new Splide('.hnr-slider__wrap',{
    type  : 'fade',
    rewind: true,
    perPage: 1,
    perMove: 1,
    pagination: false,
    classes: {
        arrows: 'splide__arrows hnr-slider__arrows',
        arrow : 'splide__arrow hnr-slider__arrow',
        prev  : 'splide__arrow--prev hnr-slider__arrow',
        next  : 'splide__arrow--next hnr-slider__arrow',
    },
}).mount();

let peSplide = new Splide('.pe-splide', {
    type  : 'fade',
    rewind: true,
    perPage: 1,
    perMove: 1,
    pagination: false,
    classes: {
        arrows: 'splide__arrows pe-arrows',
        arrow : 'splide__arrow pe-arrow',
        prev  : 'splide__arrow--prev pe-arrow',
        next  : 'splide__arrow--next pe-arrow',
    },
})


//Review Splide Numbering
let totalReviews = $('.hnr-slider__item.splide__slide').length;
let activeReviewIndex;
$('.hnr-slider__counter').find('.hnr-slider__total').text(totalReviews);
function activeReviewCount () {
    $('.hnr-slider__item.splide__slide').each(function(index){
        let currentIndex = index + 1;
        if( $(this).hasClass('is-visible') ){
            $('.hnr-slider__counter').find('.hnr-slider__current').text(currentIndex);
        }
    });
}
activeReviewCount();
$('.hnr-slider__arrow.splide__arrow').on('click', function(){
    setTimeout(activeReviewCount, 50);
})
