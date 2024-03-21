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

// Function to map values from one range to another
function mapValue(value, fromMin, fromMax, toMin, toMax) {
    return toMin + ((value - fromMin) * (toMax - toMin)) / (fromMax - fromMin);
}

gsap.registerPlugin(SplitText, ScrollTrigger);
$(document).ready(function () {
    $(function() {
        $('body').scrollTop(0);
    });

    //Total number of steps
    let totalSteps = $(".hws-step__item").length;
    if (totalSteps < 10) {
        $(".hwi-desc__span")
            .find("p")
            .text("0" + totalSteps);
    } else {
        $(".hwi-desc__span").find("p").text(totalSteps);
    }
    // GSAP Accordion for each Step Item
    $(".hws-step__item").each(function (i) {
        let stepNumber = i + 1;
        if (stepNumber < 10) {
            $(this)
                .find(".hws-si__number")
                .find("p")
                .text("0" + stepNumber);
        } else {
            $(this).find(".hws-si__number").find("p").text(stepNumber);
        }
        const accordionTimeline = gsap
            .timeline({reversed: true, paused: true})
            .to($(this).find(".hws-si__accordion-body"), {
                height: "auto",
                duration: 1,
                ease: "power3.inOut",
            });
        $(this)
            .find(".hws-si__ah-trigger")
            .on("click", () => toggleAccordion(accordionTimeline));
    });

    function toggleAccordion(timeline) {
        timeline.reversed() ? timeline.play() : timeline.reverse();
    }

    // Image Mask Hovering
    var maskedImage = $(".home-visual__top").find("img");
    maskedImage.on("mousemove", function (event) {
        // Get the cursor position relative to the element
        var mouseX = event.pageX - maskedImage.offset().left;
        var mouseY = event.pageY - maskedImage.offset().top;
        // Get the current mask size in em units
        var maskSizeEm = parseFloat(maskedImage.css("mask-size"));
        // Calculate the percentage of mask-size relative to the width of maskedImage
        var maskSizePercentageWidth =
            (((maskSizeEm / maskedImage.width()) * 100) / 4) * 3;
        var maskSizePercentageHeight =
            (((maskSizeEm / maskedImage.height()) * 100) / 6) * 5;
        // Map cursor position to mask-position (adjust scaling as needed)
        var maskX = mapValue(
            mouseX,
            0,
            maskedImage.width(),
            -maskSizePercentageWidth,
            100 + maskSizePercentageWidth
        );
        var maskY = mapValue(
            mouseY,
            0,
            maskedImage.height(),
            -maskSizePercentageHeight,
            100 + maskSizePercentageHeight
        );
        maskedImage.css("mask-position", maskX + "% " + maskY + "%");
    });


    // Werkwijze intro scaling
    mm.add("(min-width: 992px)", () => {

        let werkwijze = gsap.to(".hwi-wrapper", {
            scale: 1,
            ease: Power2.easeOut,
            scrollTrigger: {
                trigger: ".home-werkwijze__intro",
                pin: true,
                start: "top top",
                end: "+=400%",
                scrub: true,
                //markers: true,
                invalidateOnRefresh: true,
                onEnter: function() {
                    // Call st.refresh() when pinning starts
                    st.refresh();
                }
            },
        });
        // Werkwijze background fading
        let werkwijzebg = gsap.to(".hwi-background", {
            opacity: 0,
            ease: Power1.easeOut,
            scrollTrigger: {
                trigger: ".home-werkwijze__intro",
                start: "top top",
                end: "+=300%",
                scrub: true,
                invalidateOnRefresh: true,
            },
        });

    });




    //Hero Load timeline
    let heroTitleSplit = new SplitText($(".hhm-top__title").find("h1"), {
        type: "lines",
        linesClass: "hero-line-mask",
    });
    $(".hhm-top__title").find("h1").children("div").wrapInner("<span></span>");
    let heroTextLoad = gsap.timeline();
    heroTextLoad.delay(.75)
    let heroTextSpanTargets = gsap.utils.toArray(
        $(".hhm-top__title").find("span")
    );
    heroTextLoad.fromTo(
        heroTextSpanTargets,
        {y: "125%"},
        {y: "0%", stagger: 0.1, duration: 1, ease: "power3.out"},
        1.8
    );
    heroTextLoad.fromTo(
        ".hhm-top__label",
        {y: "15%", opacity: 0},
        {y: "0%", opacity: 1, duration: 0.75, ease: "power1.out"},
        2.6
    );
    heroTextLoad.fromTo(
        ".hhm-bottom",
        {y: "25%", opacity: 0},
        {y: "0%", opacity: 1, duration: 0.75, ease: "power1.out"},
        2.9
    );
    heroTextLoad.fromTo(
        $(".home-hero__scroll").children(),
        {opacity: 0},
        {opacity: 1, stagger: 0.2, duration: 0.75, ease: "power1.out"},
        3.4
    );
    heroTextLoad.to(
        ".home-visual__overlay",
        {x: "-=105vw", duration: 2.85, ease: "power4.out"},
        2.2
    );
    heroTextLoad.fromTo(
        ".navbar-menu",
        {y: "15%", opacity: 0},
        {y: "0%", opacity: 1, duration: 1, ease: "power2.out"},
        2.2
    );
    heroTextLoad.fromTo(
        ".navbar-home",
        {y: "15%", opacity: 0},
        {y: "0%", opacity: 1, duration: 1, ease: "power2.out"},
        3.4
    );
    heroTextLoad.fromTo(
        ".navbar-contact",
        {y: "15%", opacity: 0},
        {y: "0%", opacity: 1, duration: 1, ease: "power2.out"},
        2.2
    );
    heroTextLoad.eventCallback("onComplete", function(){  });

    /// GSAP Link Hover
    //let text = new SplitText(".link-paragraph", {type: "chars"});

    // $(".link12-12-sb-test").each(function () {
    //     let innerText = $(this).find(".link-paragraph").children();
    //     $(this).find(".link-paragraph").children().each(function () {
    //             let innerLetter = $(this).text();
    //             $(this).wrapInner("<span class='link-paragraph__inner--visible' style='display: inline-block; position: relative;'></span>");
    //             $('<span class="link-paragraph__inner--hidden" style="display: inline-block; position: absolute; left: -100%;">' + innerLetter + "</span>").appendTo($(this));
    //         });
    //
    //     let hoverText = $(this).find('.link-paragraph').children();
    //     $(hoverText).each(function () {
    //         let linkAnimation = gsap.to(this.children, {
    //             x: "+=100%",
    //             paused: true,
    //             ease: "power1.inOut",
    //             //duration: 0.2,
    //             stagger: {
    //                 amount: .065,
    //             },
    //         });
    //
    //         $(this)
    //             .parents(".link12-12-sb-test")
    //             .on("mouseenter", function () {
    //                 linkAnimation.play();
    //             });
    //         $(this)
    //             .parents(".link12-12-sb-test")
    //             .on("mouseleave", function () {
    //                 linkAnimation.reverse();
    //             });
    //     });
    // });

    // $(".link12-12-sb").each(function () {
    //     let hoverText = $(this).children();
    //     $(hoverText).each(function () {
    //         let linkAnimation = gsap.to(this.children, {
    //             y: "-=100%",
    //             paused: true,
    //             ease: "power1.inOut",
    //             duration: 0.35,
    //             stagger: {
    //                 amount: 0.175,
    //             },
    //         });
    //         $(this)
    //             .parents(".link12-12-sb")
    //             .on("mouseenter", function () {
    //                 linkAnimation.play();
    //             });
    //         $(this)
    //             .parents(".link12-12-sb")
    //             .on("mouseleave", function () {
    //                 linkAnimation.reverse();
    //             });
    //     });
    // });
    $(".link12-12-sb").each(function () {
            let linkAnimation = gsap.to(this.children, {
                y: "-=100%",
                paused: true,
                ease: "power2.inOut",
                duration: 0.35,
            });
            $(this).on("mouseenter", function () { linkAnimation.play(); });
            $(this).on("mouseleave", function () { linkAnimation.reverse(); });
    });
    /// GSAP Button hover
    $(".main-button").each(function () {
        $(this).wrapInner("<span></span>");
    });
    const buttons = gsap.utils.toArray(".main-button");
    buttons.forEach((item) => {
        let span = item.querySelector("span");
        let tl = gsap.timeline({paused: true});

        tl.to(span, {duration: 0.3, yPercent: -150, ease: "power2.in"});
        tl.set(span, {yPercent: 150});
        tl.to(span, {duration: 0.3, yPercent: 0});

        item.addEventListener("mouseenter", () => tl.play(0));
    });
    // Inline text image placement
    $(".hbi-span__image.first").appendTo(".hbi-image__span.first");
    $(".hbi-span__image.second").appendTo(".hbi-image__span.second");

    // Reviews splide
    let reviewsSplide = new Splide(".hri-splide", {
        type: "fade",
        rewind: true,
        perPage: 1,
        perMove: 1,
        pagination: false,
        rewind: true,
        classes: {
            arrows: "splide__arrows hri-controls",
            arrow: "splide__arrow hri-arrow_button",
            prev: "splide__arrow--prev hri-arrow_button.prev",
            next: "splide__arrow--next hri-arrow_button.next",
        },
    }).mount();
    // Navbar logo fade scrolltrigger
    ScrollTrigger.create({
        trigger: ".home-visual",
        start: "top " + "+=" + $(".navbar").outerHeight() * 0.8,
        end: "bottom bottom",
        onEnter: function () {
            $(".navbar-home__link-trigger").click();
        },
        onLeaveBack: function () {
            $(".navbar-home__link-trigger").click();
        },
    });


    let werkwijzeSection = ScrollTrigger.create({
        trigger: $('.home-werkwijze'),
        start: () => 'top ' + centerNav,
        end: () => 'bottom ' + centerNav,
        //markers : true,
        invalidateOnRefresh: true,
        onEnter: function(){
            $('.navbar-home__link').addClass('hidden');
            werkwijzeSection.refresh();
        },
        onEnterBack: function(){
            $('.navbar-home__link').addClass('hidden');
        },
        onLeave: function(){
            $('.navbar-home__link').removeClass('hidden');
        },
        onLeaveBack: function(){
            $('.navbar-home__link').removeClass('hidden');
        }
    });
    mm.add("(max-width: 768px)", () => {
        let werkwijzeSectionMobile = ScrollTrigger.create({
            trigger: $('.home-werkwijze'),
            start: () => 'top ' + centerNav,
            end: () => 'bottom ' + centerNav,
            //markers : true,
            invalidateOnRefresh: true,
            onEnter: function(){
                $('.navbar').hide();
            },
            onEnterBack: function(){
                $('.navbar').hide();
            },
            onLeave: function(){
                $('.navbar').show();
            },
            onLeaveBack: function(){
                $('.navbar').show();
            }
        });

        $('.hws-si__accordion-head').on('click', function(){
            setTimeout(function(){ werkwijzeSectionMobile.refresh(); },1000)
        })
    });
    $('.hws-si__accordion-head').on('click', function(){
        setTimeout(function(){
            werkwijzeSection.refresh();
            st.refresh();
        },1000)
    })
});

