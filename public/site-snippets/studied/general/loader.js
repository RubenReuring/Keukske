let heroTitleSplit = new SplitText($(".pli-bottom__text").find("p"), {
    type: "words",
    wordsClass: "ls-line-mask",
});

$(".pli-bottom__text").find("p").children("div").wrapInner('<span style="display: block; text-align: center; position: relative;"></span>');

let loaderTimeline = gsap.timeline();
let loaderSloganTargets = gsap.utils.toArray(
    $(".pli-bottom__text").find('span')
);

loaderTimeline.fromTo(
    '.pli-bottom__visual',
    {opacity: "0"},
    {opacity: "1", duration: .5, ease: "power3.out"},
    .2
);
loaderTimeline.fromTo(
    '.pli-pulse',
    {opacity: "1", width: '20em', height: '20em'},
    {opacity: "0", width: '27.5em', height: '27.5em', duration: 1.6, ease: "power1.out"},
    .6
);
loaderTimeline.fromTo(
    '.pli-pulse',
    {opacity: "1", width: '20em', height: '20em'},
    {opacity: "0", width: '30em', height: '30em', duration: 1.6, ease: "power1.out"},
    2
);
loaderTimeline.fromTo(
    '.pli-inner',
    {width: "0em", height: "0em"},
    {width: "20em", height: "20em", duration: 1.5, ease: "power3.inOut"},
    3
);
loaderTimeline.fromTo(
    '.page-loader__inner',
    {opacity: "1"},
    {opacity: "0", duration: .7, ease: "power1.inOut"},
    4.5
);
loaderTimeline.fromTo(
    '.page-loader__bg',
    {y: "0%"},
    {y: "-100%", duration: .9, ease: "power2.inOut"},
    4.85
);
loaderTimeline.fromTo(
    '.page-loader',
    {y: "0%"},
    {y: "-100%", duration: .9, ease: "power2.inOut"},
    4.9
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




