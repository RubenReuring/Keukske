let heroTitleSplit = new SplitText($(".pli-bottom__text").find("p"), {
    type: "lines",
    linesClass: "ls-line-mask",
});

$(".pli-bottom__text").find("p").children("div").wrapInner('<span style="display: block; position: relative;"></span>');
