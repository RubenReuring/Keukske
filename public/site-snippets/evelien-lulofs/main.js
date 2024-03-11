console.log($('.home-visual, .home-werkwijze'))
let lightNavElems = $('.home-visual, .home-werkwijze')

console.log(($('.navbar').outerHeight() - ( $('.navbar').height() / 2 )))

function toggleNavLight(turnOn) {
    if (turnOn) {
        $('.navbar').addClass('navbar-light')
    } else {
        $('.navbar').removeClass('navbar-light')
    }
}

    let st;
    $(lightNavElems).each(function(){
        st = ScrollTrigger.create({
            trigger: this,
            start: 'top top',
            end: 'bottom top',
            markers : true,
            onEnter: function(){
                toggleNavLight(true);
            },
            onEnterBack: function(){
                toggleNavLight(true);
            },
            onLeave: function(){
                toggleNavLight(false);
            },
            onLeaveBack: function(){
                toggleNavLight(false);
            }
        });
    });


