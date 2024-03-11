console.log($('.home-visual, .home-werkwijze'))
let lightNavElems = $('.home-visual, .home-werkwijze')


    let st;
    $(lightNavElems).each(function(){
        st = ScrollTrigger.create({
            trigger: this,
            start: 'top top',
            end: 'bottom top',
            markers : true,
            onEnter: function(){
                console.log('Light Nav')
            },
            onEnterBack: function(){
                console.log('Light Nav')
            },
            onLeave: function(){
                console.log('Normal Nav')
            },
            onLeaveBack: function(){
                console.log('Normal Nav')
            }
        });
    });


