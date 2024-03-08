console.log($('.home-visual, .home-werkwijze'))
let lightNavElems = $('.home-visual, .home-werkwijze')


$( document ).ready(function() {
    $(lightNavElems).each(function(){
        ScrollTrigger.create({
            trigger: this,
            start: 'top bottom',
            end: 'bottom bottom',
            markers : true
        });
    });
});
