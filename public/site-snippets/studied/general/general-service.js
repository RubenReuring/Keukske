let mm = gsap.matchMedia();
let heroChecks
$('.huiswerk-splide__slide').addClass('splide__slide');
mm.add("(max-width: 767px)", () => {
    if(!$('.huiswerk-splide').hasClass('splide')){
        $('.huiswerk-splide').addClass('splide')
        $('.huiswerk-splide__list').addClass('splide__list');
    }
    heroChecks = new Splide( '.splide', {
        perPage: 1,
        perMove: 1,
        autoWidth: true,
        gap: '1em',
        focus  : 'left',
        drag: 'free',
        pagination: false,
        arrows: false,
    } ).mount();

    heroChecks.go(0);
    heroChecks.on('dragging', function(){
        var scrollPercentage = getScrollPercentage(heroChecks);
        console.log('Scroll Percentage:', scrollPercentage + '%');
    })


    function getScrollPercentage(splideInstance) {
        var track = $(splideInstance.Components.Elements.track);
        var scrollLeft = track.scrollLeft();
        var maxScrollLeft = track[0].scrollWidth - track.outerWidth();

        // Ensure no divide by zero errors
        if (maxScrollLeft === 0) return 0;

        // Calculate and return the scroll percentage
        return Math.round((scrollLeft / maxScrollLeft) * 100);
    }

});
mm.add("(min-width: 768px)", () => {
    if($('.huiswerk-splide').hasClass('splide')){
        $('.huiswerk-splide').removeClass('splide')
        $('.huiswerk-splide__list').removeClass('splide__list');
        if($('.huiswerk-splide').hasClass('is-active')){
            heroChecks.destroy(true);
        }
    }
});

