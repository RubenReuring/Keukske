let heroTitleSplit = new SplitText($(".pli-bottom__text").find("p"), {
    type: "lines",
    linesClass: "ls-line-mask",
});

$(".pli-bottom__text").find("p").children("div").wrapInner('<span style="display: block; position: relative;"></span>');

let loaderTimeline = gsap.timeline();
let loaderSloganTargets = gsap.utils.toArray(
    $(".pli-bottom__text").find('span')
);

loaderTimeline.fromTo(
    '.page-loader',
    {backgroundColor: "#ffffff"},
    {backgroundColor: "#23272a", duration: .95, ease: "power1.inOut"}
);
loaderTimeline.fromTo(
    loaderSloganTargets,
    {y: "125%"},
    {y: "0%", stagger: 0.15, duration: 1.35, ease: "power3.out"},
    .6
);
loaderTimeline.fromTo(
    '.pli-embed',
    {y: "125%"},
    {y: "0%", stagger: 0.15, duration: 1.35, ease: "power3.out"},
    1
);
