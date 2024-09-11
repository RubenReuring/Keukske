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
    // Check for the locale element with class 'w--current' indicating the current locale
    var currentLocale = $('.nav-locale .w--current').attr('hreflang');

    // Grab the current language text (e.g., 'Nederlands' or 'English')
    var currentLocaleText = $('.nav-locale .w--current').text();

    // Set the current language text to the '.nav-ld-text.current' element
    $('.nav-ld-text.current').text(currentLocaleText);

    // Check if the locale is 'nl' or 'en' and log the result
    if (currentLocale === 'nl') {
        console.log('nl');
    } else if (currentLocale === 'en') {
        console.log('en');
    } else {
        console.log('Locale not found');
    }
});

