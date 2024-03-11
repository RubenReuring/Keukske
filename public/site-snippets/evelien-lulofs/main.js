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
            markers : true,
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
    // fade creme to orange
    // splittext slide slogan
    // logo's fade in
    // fade out everything
    // slide up orange
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
        loaderSloganTargets,
        {y: "125%"},
        {y: "0%", stagger: 0.1, duration: 1, ease: "power3.out"}
    );
    loaderTimeline.fromTo(
        '.loader-woordmerk__wrap',
        {opacity: "0"},
        {opacity: "1", stagger: 0.1, duration: .3, ease: "power1.inOut"},
        .2
    );
    loaderTimeline.fromTo(
        '.loader-beeldmerk__wrap',
        {opacity: "0"},
        {opacity: "1", stagger: 0.1, duration: .3, ease: "power1.inOut"},
        .2
    );
})
