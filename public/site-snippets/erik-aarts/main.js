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
    $(this).find(".ab-accordion__head").on("click", () => toggleAccordion(accordionTimeline));
});

function toggleAccordion(timeline) {
    timeline.reversed() ? timeline.play() : timeline.reverse();
}

$(".link16-16-med.clickable").addClass('clickable')

    const voorwaardenTimeline = gsap.timeline({reversed: true, paused: true})
        .to($('.voorwaarden').find(".vi-content__wrap"), {
            height: "auto",
            duration: 1,
            ease: "power3.inOut",
        });
    $('.voorwaarden').find(".link16-16-med.clickable").on("click", () => {
        $(this).removeClass('clickable');
        $(this).removeClass('non-clickable');
        toggleVoorwaarden(voorwaardenTimeline);
    });

function toggleVoorwaarden(timeline) {
    timeline.reversed() ? timeline.play() : timeline.reverse();
}


