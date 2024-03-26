

$(document).ready(function() {

    let blurStickySection = ScrollTrigger.create({
        trigger: $('.pc-image__collection'),
        start: () => 'top bottom',
        end: () => 'bottom top',
        // markers: true,
        invalidateOnRefresh: true,
        onEnter: function () {
            $('.ps-image__blur').addClass('visible')
        },
        onLeaveBack: function () {
            $('.ps-image__blur').removeClass('visible')
        }
    });

    let navbarTransition = gsap.timeline({paused: true});
    navbarTransition.fromTo(
        '.navbar',
        {backgroundColor: 'rgba(255,255,255,0)'},
        {paddingTop: "1em", paddingBottom: "1em", backgroundColor: 'rgba(255,255,255,1)',duration: .8, ease: "power4.out"},
    );

    function collapsNav() {
        navbarTransition.play();
    }

    if (isAtTop()) {
        navbarTransition.reverse();
    } else {
        navbarTransition.play();
    }

    $(window).scroll(function() {
        if (isAtTop()) {
            navbarTransition.reverse();
        } else {
            navbarTransition.play();
        }
    });

});
