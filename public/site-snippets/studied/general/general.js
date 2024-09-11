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
    // Find the current active locale
    var $currentLocale = $('.nav-locale .w--current');
    var currentLocale = $currentLocale.attr('hreflang');
    var currentLocaleText = $currentLocale.text().trim();
    $('.nav-ld-text.current').find('p').text(currentLocaleText);
    var currentImgSrc = $currentLocale.find('img').attr('src');
    $('.nav-ld_flagwrap.current img').attr('src', currentImgSrc);

    // Log the locale
    if (currentLocale === 'nl') {
        console.log('nl');
    } else if (currentLocale === 'en') {
        console.log('en');
    } else {
        console.log('Locale not found');
    }
});
