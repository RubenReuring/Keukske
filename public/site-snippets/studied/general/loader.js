let heroTitleSplit = new SplitText($(".pli-bottom__text").find("p"), {
    type: "lines",
    linesClass: "ls-line-mask",
});

$(".pli-bottom__text").find("p").children("div").wrapInner('<span style="display: block; position: relative;"></span>');

let loaderTimeline = gsap.timeline();
let loaderSloganTargets = gsap.utils.toArray(
    $(".ls-inner").find('span')
);

loaderTimeline.fromTo(
    '.loader',
    {backgroundColor: "#ffffff"},
    {backgroundColor: "#fe9963", duration: .75, ease: "power1.inOut"}
);
loaderTimeline.fromTo(
    loaderSloganTargets,
    {y: "125%"},
    {y: "0%", stagger: 0.15, duration: 1.35, ease: "power3.out"},
    .4
);
