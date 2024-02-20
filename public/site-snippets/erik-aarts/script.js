
$(document).ready(function() {

    let navbarTransition = gsap.timeline();
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
    navbarTransition.fromTo(
        '.hlt-inner',
        {y: "-105%"},
        {y: "0%", duration: .7, ease: "power3.out"},
        1.3
    );

    function isAtTop() {
        return $(window).scrollTop() === 0;
    }

    if (isAtTop()) {
        console.log("Page is at the top!");
    } else {
        console.log("Page is not at the top!");
    }

    $(window).scroll(function() {
        if (isAtTop()) {
            console.log("Page is at the top!");
        } else {
            console.log("Page is not at the top!");
        }
    });
});


