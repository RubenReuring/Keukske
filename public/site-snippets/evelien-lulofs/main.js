console.log($('.home-visual, .home-werkwijze'))
let lightNavElems = $('.home-visual, .home-werkwijze')

$(lightNavElems).each(function(){
    ScrollTrigger.create({
        trigger: this,
        start: 'top top',
        end: 'bottom bottom',
        markers : true
    });
});
