let mm = gsap.matchMedia();
let smoother;
$(document).ready(function() {
    if (Webflow.env('editor') != undefined) {
        //console.log('Editor is loaded: do not load custom js');
    } else {
        //console.log('Editor is not loaded: load custom js...');

        gsap.registerPlugin(ScrollSmoother);
        ScrollTrigger.normalizeScroll(true);
        mm.add("(min-width: 768px)", () => {
            smoother = ScrollSmoother.create({
                smooth: 1,
                effects: true,
                smoothTouch: 0.1,
                // normalizeScroll: true,
                ignoreMobileResize: true,
                allowNestedScroll: true,
            });
            ScrollSmoother.create({ smooth: 1, effects: true, smoothTouch: 0.1, });
            return () => smoother.kill();
        });
    }
})
console.log(smoother)

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
