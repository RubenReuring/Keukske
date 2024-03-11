let lightNavElems = $('.home-visual, .home-werkwijze')
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
            start: 'top ' + ($('.navbar').outerHeight() - ( $('.navbar').height() / 2 )),
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

console.log()

