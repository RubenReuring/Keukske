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

    var currentLocaleText = $('.locale-item.w--current').text();
    $('.nav-ld-text.current').find('.p14-1-reg').text(currentLocaleText);
    var currentImgSrc = $('.locale-item.w--current').next('img').attr('src');
    $('.nav-ld_flagwrap.current').find('img').attr('src', currentImgSrc)
        .attr('srcset','');


    var languages = [];

    $('.locale-item:not(.w--current)').each(function() {
        var $locale = $(this);
        var hreflang = $locale.attr('hreflang');
        var name = $locale.text().trim();
        var imgSrc = $locale.next('img').attr('src');

        languages.push({
            hreflang: hreflang,
            name: name,
            imgSrc: imgSrc
        });
    });

    console.log(languages); // Log the array to verify
});
