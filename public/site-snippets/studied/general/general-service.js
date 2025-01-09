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

