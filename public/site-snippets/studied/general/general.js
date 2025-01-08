$(document).ready(function() {
    let navbarTransitionLarge = gsap.timeline({ paused: true });
    navbarTransitionLarge.fromTo(
        '.nav',
        { autoAlpha: 1 },
        { duration: 0.55, ease: "power2.inOut", onStart(){ $('.nav').removeClass('navAtTop') }  }
    );

    // GSAP timeline for 991px and below (no paddingTop change)
    let navbarTransitionSmall = gsap.timeline({ paused: true });
    navbarTransitionSmall.fromTo(
        '.nav',
        { autoAlpha: 1 },
        { duration: 0.55, ease: "power2.inOut", onStart(){ $('.nav').removeClass('navAtTop') }  }
    );

    // Function to check screen width
    function isLargeScreen() {
        return window.matchMedia('(min-width: 992px)').matches;
    }

    function isAtTop() {
        return $(window).scrollTop() <= 20;
    }

    // Function to handle navbar transition based on scroll position and screen size
    function handleNavbarTransition() {
        if (isLargeScreen()) {
            if (isAtTop()) {
                $('.nav').addClass('navAtTop');
                navbarTransitionLarge.reverse();
            } else {
                navbarTransitionLarge.play();
                $('.nav').removeClass('navAtTop');
            }
        } else {
            if (isAtTop()) {
                $('.nav').addClass('navAtTop');
                navbarTransitionSmall.reverse();
            } else {
                navbarTransitionSmall.play();
                $('.nav').removeClass('navAtTop');
            }
        }
    }

    // Initial load check
    handleNavbarTransition();

    // On scroll, handle the transition
    $(window).scroll(function() {
        handleNavbarTransition();
    });

    // On window resize, reset the navbar transition for the new size
    $(window).resize(function() {
        handleNavbarTransition();
    });

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
                <p class="p14-1-reg to16">{{name}}</p>
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
    $('.nav-mobile-button').on('click', function() {
        $(this).parents('.nav').toggleClass('menu-active');
        $('body').toggleClass('bodyscroll-off')
    });
});
