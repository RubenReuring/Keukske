function isAtTop() {
    return $(window).scrollTop() === 0;
}

let navbarTransition = gsap.timeline({paused: true});
navbarTransition.fromTo(
    '.nav',
    {backgroundColor: 'rgba(245, 242, 235, 0)', paddingTop: "1.25em"},
    {paddingTop: "1em", backgroundColor: 'rgba(245, 242, 235,1)',duration: .55, ease: "power2.inOut"},
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

$(document).ready(function() {
    var currentLocale = $('.nav-locale .w--current').attr('hreflang');
    if (currentLocale === 'nl') {
        $('.nav-ld-text.current').text('Nederlands')
    } else if (currentLocale === 'en') {
        $('.nav-ld-text.current').text('English')
    } else {
        console.log('Locale not found');
    }
});

