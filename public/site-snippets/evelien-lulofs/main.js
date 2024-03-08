console.log($('.home-visual, .home-werkwijze'))
let lightNavElems = $('.home-visual, .home-werkwijze')



    $(lightNavElems).each(function(){
        let st = ScrollTrigger.create({
            trigger: this,
            start: 'top bottom',
            end: 'bottom bottom',
            markers : true
        });
    });
