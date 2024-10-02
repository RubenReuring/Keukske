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
        var href = $locale.attr('href');
        var name = $locale.text().trim();
        var imgSrc = $locale.next('img').attr('src');

        languages.push({
            hreflang: hreflang,
            name: name,
            url: href,
            imgSrc: imgSrc
        });
    });

    // Define the template
    var template = `
        <a href="{{url}}" class="nav-ld__link w-inline-block" tabindex="0">
            <div class="nav-ld_flagwrap">
                <img src="{{imgSrc}}" loading="lazy" alt="" class="nav-ld-flag">
            </div>
            <div class="nav-ld-text list">
                <p class="p14-1-reg">{{name}}</p>
            </div>
        </a>
    `;

    // Clear existing content
    $('.nav-ld__list').empty();

    // Create and append new elements based on the languages array
    languages.forEach(function(language) {
        var itemHtml = template
            .replace('{{url}}', language.url)
            .replace('{{imgSrc}}', language.imgSrc)
            .replace('{{name}}', language.name);

        $('.nav-ld__list').append(itemHtml);
    });

    // Logos loop
    $('.marquee-content').clone().appendTo('.marquee-collection')
    let bannerLoop = gsap.to('.marquee-content', { duration: 25, ease: "none", x: "-=100%", repeat: -1 })

    $('.mma-head').on('click', function() {
        $(this).parent().toggleClass('mma-active');
    });
    $('.mobile-menu').on('click', function() {
        $(this).parent().toggleClass('menu-active');
    });
});
