let heroTitleSplit = new SplitText($(".pli-bottom__text").find("p"), {
    type: "words",
    wordsClass: "ls-line-mask",
});

$(".pli-bottom__text").find("p").children("div").wrapInner('<span style="display: block; text-align: center; position: relative;"></span>');

let loaderTimeline = gsap.timeline();
let loaderSloganTargets = gsap.utils.toArray(
    $(".pli-bottom__text").find('span')
);

// loaderTimeline.fromTo(
//     '.page-loader__bg',
//     {backgroundColor: "#ffffff"},
//     {backgroundColor: "#23272a", duration: .95, ease: "power1.inOut"}
// );
loaderTimeline.fromTo(
    '.pli-visual',
    {opacity: "0"},
    {opacity: "1", duration: .35, ease: "power1.inOut"},
    .25
);
loaderTimeline.fromTo(
    '.pli-bottom__text',
    {opacity: "0"},
    {opacity: "1", duration: .35, ease: "power1.inOut"},
    .25
);
loaderTimeline.fromTo(
    loaderSloganTargets,
    {y: "125%"},
    {y: "0%", stagger: 0.1, duration: 1.45, ease: "power3.out"},
    .55
);
loaderTimeline.fromTo(
    '.pli-embed',
    {y: "125%"},
    {y: "0%", duration: 1.45, ease: "power3.out"},
    .55
);
loaderTimeline.fromTo(
    '.pli-bottom__visual',
    {opacity: "0"},
    {opacity: "1", duration: 1.55, ease: "power3.out"},
    .75
);
loaderTimeline.fromTo(
    '.pli-inner',
    {width: "0em", height: "0em"},
    {width: "20em", height: "20em", duration: 1.75, ease: "power3.inOut"},
    .95
);
loaderTimeline.fromTo(
    '.page-loader__inner',
    {opacity: "1"},
    {opacity: "0", duration: .7, ease: "power1.inOut"},
    2.70
);
loaderTimeline.fromTo(
    '.page-loader__bg',
    {y: "0%"},
    {y: "-100%", duration: .8, ease: "power2.inOut"},
    3.05
);
loaderTimeline.fromTo(
    '.page-loader',
    {y: "0%"},
    {y: "-100%", duration: .8, ease: "power2.inOut"},
    3.10
);



$('a').on('click', function (e) {
    const link = $(this).attr('href');
    if (link.startsWith('http') && !link.startsWith(window.location.origin)) {
        return; // Allow external links to behave normally
    }

    if (link.startsWith('#')) {
        return; // Allow anchor links to behave normally
    }
    e.preventDefault();

    ////
    let exitTimeline = gsap.timeline({ paused: true });
    exitTimeline.fromTo(
        '.page-loader__bg',
        {y: "100%"},
        {y: "0%", duration: .8, ease: "power2.inOut"}
    );
    exitTimeline.fromTo(
        '.page-loader',
        {y: "100%"},
        {y: "0%", duration: .8, ease: "power2.inOut"},
        .05
    );
    exitTimeline.play();
    ////
    setTimeout(() => {
        window.location.href = link;
    }, 805); // 2000 ms = 2 seconds
});




