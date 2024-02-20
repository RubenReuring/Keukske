
$(document).ready(function() {

    let navbarTransition = gsap.timeline({paused: true});
    let navbarWordArray = $('.hln-word__secondary');
    let navbarWordWrapArray = $('.hln-word__secondary--wrap');
    navbarTransition.to(
        navbarWordArray,
        {y: "100%", stagger: 0.075, duration: 1, ease: "power4.out"}
    );
    navbarTransition.to(
        navbarWordWrapArray,
        {width: "0", duration: .8, ease: "power4.out"},
        .8
    );
    navbarTransition.to(
        '.home-link__name',
        {gridColumnGap: "0.075em", duration: .9, ease: "power4.out"},
        .8
    );
    navbarTransition.to(
        '.navbar',
        {paddingTop: "1em", paddingBottom: "1em", backgroundColor: 'var(--white)',duration: .4, ease: "power2.out"},
        .8
    );


    function isAtTop() {
        return $(window).scrollTop() === 0;
    }
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


