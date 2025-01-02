gsap.RegisterPlugin(SplitText);

let heroTitleSplit = new SplitText($(".pli-bottom__text").find("p"), {
    type: "lines",
    linesClass: "ls-line-mask",
});

$(".pli-bottom__text").find("p").children("div").wrapInner('<span style="display: block; text-align: center; position: relative;"></span>');
