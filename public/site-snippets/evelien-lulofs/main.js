let loaderText = $('.loader-data-text').text();
$('.ls-inner').find('p').text(loaderText);

let mm = gsap.matchMedia();
let smoother;
$(document).ready(function() {
    if (Webflow.env('editor') != undefined) {
        //console.log('Editor is loaded: do not load custom js');
    } else {
        //console.log('Editor is not loaded: load custom js...');
        // gsap.registerPlugin(ScrollSmoother);
        // ScrollTrigger.normalizeScroll(true);
        // mm.add("(min-width: 768px)", () => {
        //     smoother = ScrollSmoother.create({
        //         smooth: 1,
        //         effects: true,
        //         smoothTouch: 0.1,
        //         // normalizeScroll: true,
        //         ignoreMobileResize: true,
        //         allowNestedScroll: true,
        //     });
        //     ScrollSmoother.create({ smooth: 1, effects: true, smoothTouch: 0.1, });
        //     return () => smoother.kill();
        // });
    }
})

// Nav Coloring
    let lightNavElems = $('.home-visual, .home-werkwijze, .project-hero, .project-next')
    function toggleNavLight(turnOn) {
        if (turnOn) {
            $('.navbar').addClass('navbar-light')
        } else {
            $('.navbar').removeClass('navbar-light')
        }
    }
    let centerNav = ($('.navbar').outerHeight() - ( $('.navbar').height() / 2 ));
    function handleResize() {
        centerNav = ($('.navbar').outerHeight() - ( $('.navbar').height() / 2 ));
    }
    window.addEventListener('resize', handleResize);
    let st;
    $(lightNavElems).each(function(){
        st = ScrollTrigger.create({
            trigger: this,
            start: () => 'top ' + centerNav,
            end: () => 'bottom ' + centerNav,
            //markers : true,//
            invalidateOnRefresh: true,
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

// Custom Cursor Hovering
    let cursorArrowHover = $('.hpg-project__imagewrap, .project-next')
    $(cursorArrowHover).each(function(){
        $(this).mouseenter(function() {
            $('.cursor-large__arrow').click();
        });
        $(this).mouseleave(function() {
            $('.cursor-large__arrow').click();
        });
    })

mm.add("(min-width: 992px)", () => {
    // Menu Link List Show/Hide
    var clickCount = 0;
    let menuTargets = $('.nm-link__mask').find('.nm-link');
    gsap.set(menuTargets, { y: "100%" })

    $('.menu-button').click(function() {
        clickCount++;
        if (clickCount === 1) {
            $(this).addClass('nav-menu-active')
            $('.nav-menu').removeClass('menu-hidden');
            gsap.fromTo(
                menuTargets,
                {
                    y: "100%"
                },
                {
                    y: "0%",
                    stagger: 0.1,
                    duration: .35,
                    ease: "power3.out"
                }
            )
        } else if (clickCount === 2) {
            $(this).removeClass('nav-menu-active')
            gsap.to(
                menuTargets,
                {
                    y: "100%",
                    stagger: 0.1,
                    duration: .35,
                    ease: "power3.out",
                    onComplete: function(){
                        $('.nav-menu').addClass('menu-hidden');
                    }
                }
            )
        }
        if (clickCount >= 2) {
            clickCount = 0;
        }
    });

    $(window).scroll(function() {
        if($('.menu-button').hasClass('nav-menu-active')){
            $('.menu-button').click();
        }
    });

});

mm.add("(max-width: 991px)", () => {
    $('.menu-button').on('click', function(){
        if(!$('.body').hasClass('bodyscroll-off')){
            $('.body').addClass('bodyscroll-off');
            $('.navbar').addClass('fm-active')
        } else if ($('.body').hasClass('bodyscroll-off')){
            $('.body').removeClass('bodyscroll-off');
            $('.navbar').removeClass('fm-active')
        }
    });

    $('.fm-link.first, .fm-link.second').on('click', function(){
        if($('.body').hasClass('bodyscroll-off')){
            $('.menu-button').click();
            $('.body').removeClass('bodyscroll-off');
            $('.navbar').removeClass('fm-active')
        }
    })
});


$("a").on("click", function (e) {
    if ($(this).prop("hostname") == window.location.host && $(this).attr("href").indexOf("#") === -1 && !$(this).hasClass('no-transition') && $(this).attr("target") !== "_blank" && $('.transition-trigger').length > 0) {
        e.preventDefault();
        let transitionURL = $(this).attr("href");
        $('.transition-trigger').click();
        setTimeout(function () {window.location = transitionURL;}, 350);
    }
});
// On Back Button Tap
window.onpageshow = function(event) {if (event.persisted) {window.location.reload()}};
