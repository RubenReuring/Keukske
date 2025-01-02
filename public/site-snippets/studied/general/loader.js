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
    '.page-loader__bg',
    {backgroundColor: "#ffffff"},
    {backgroundColor: "#23272a", duration: .95, ease: "power1.inOut"}
);
loaderTimeline.fromTo(
    loaderSloganTargets,
    {y: "125%"},
    {y: "0%", stagger: 0.1, duration: 1.45, ease: "power3.out"},
    .8
);
loaderTimeline.fromTo(
    '.pli-embed',
    {y: "125%"},
    {y: "0%", duration: 1.45, ease: "power3.out"},
    .8
);
loaderTimeline.fromTo(
    '.pli-bottom__visual',
    {opacity: "0"},
    {opacity: "1", duration: 1.55, ease: "power3.out"},
    1
);
loaderTimeline.fromTo(
    '.pli-inner',
    {width: "0em", height: "0em"},
    {width: "15em", height: "15em", duration: 1.75, ease: "power3.inOut"},
    1.2
);
loaderTimeline.fromTo(
    '.page-loader__inner',
    {opacity: "1"},
    {opacity: "0", duration: .7, ease: "power1.inOut"},
    2.95
);
loaderTimeline.fromTo(
    '.page-loader__bg',
    {y: "0%"},
    {y: "-100%", duration: .95, ease: "power1.inOut"},
    3.1
);
