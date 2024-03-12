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
    let cursorArrowHover = $('.hpg-project__imagewrap')
    $(cursorArrowHover).each(function(){
        $(this).mouseenter(function() {
            $('.cursor-large__arrow').click();
        });
        $(this).mouseleave(function() {
            $('.cursor-large__arrow').click();
        });
    })

// Loader
$(document).ready(function(){
    let heroTitleSplit = new SplitText($(".ls-inner").find("p"), {
        type: "lines",
        linesClass: "ls-line-mask",
    });
    $(".ls-inner").find("p").children("div").wrapInner('<span style="display: block; text-align: center; position: relative;"></span>');
    let loaderTimeline = gsap.timeline();
    let loaderSloganTargets = gsap.utils.toArray(
        $(".ls-inner").find('span')
    );
    loaderTimeline.fromTo(
        '.loader',
        {backgroundColor: "#faf8f2"},
        {backgroundColor: "#fe9963", duration: .75, ease: "power1.inOut"}
    );
    loaderTimeline.fromTo(
        loaderSloganTargets,
        {y: "125%"},
        {y: "0%", stagger: 0.15, duration: 1.35, ease: "power3.out"},
        .4
    );
    loaderTimeline.fromTo(
        '.loader-woordmerk__wrap',
        {opacity: "0"},
        {opacity: "1", duration: .3, ease: "power1.inOut"},
        .8
    );
    loaderTimeline.fromTo(
        '.loader-beeldmerk__wrap',
        {opacity: "0"},
        {opacity: "1", duration: .3, ease: "power1.inOut"},
        .8
    );
    loaderTimeline.fromTo(
        '.loader-inner',
        {opacity: "1"},
        {opacity: "0", duration: .55, ease: "power1.inOut"},
        1.65
    );
    loaderTimeline.fromTo(
        '.loader',
        {y: "0%"},
        {y: "-100%", duration: .65, ease: "power3.in"},
        1.95
    );
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
