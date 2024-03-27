function isAtTop() {
    return $(window).scrollTop() === 0;
}


// GSAP Accordion for each Step Item
$(".ab-item").each(function (i) {
    const accordionTimeline = gsap
        .timeline({reversed: true, paused: true})
        .to($(this).find(".ab-accordion__body"), {
            height: "auto",
            duration: 1,
            ease: "power3.inOut",
        });
    $(this).find(".hws-si__ah-trigger").on("click", () => toggleAccordion(accordionTimeline));
});

function toggleAccordion(timeline) {
    timeline.reversed() ? timeline.play() : timeline.reverse();
}
