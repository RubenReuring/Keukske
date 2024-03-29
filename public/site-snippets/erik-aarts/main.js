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
let voorwaardenTimeline;
if ($(".voorwaarden")[0]){
    voorwaardenTimeline = gsap.timeline({reversed: true, paused: true}).to($('.voorwaarden').find(".vi-content__wrap"), {height: "auto", duration: 1, ease: "power3.inOut",});
}

    $('.voorwaarden').find(".link16-16-med").on("click", () => {
        if(!$('.voorwaarden').find(".link16-16-med").hasClass('disabled')){ toggleVoorwaarden(voorwaardenTimeline);}
    });
    $('.voorwaarden').find(".link12-12-med").on("click", () => {
        if($('.voorwaarden').find(".link12-12-med").hasClass('enabled')){ toggleVoorwaarden(voorwaardenTimeline);}
    });

function toggleVoorwaarden(timeline) {
    timeline.reversed() ? timeline.play() : timeline.reverse();
    timeline.reversed() ? $('.voorwaarden').find(".link16-16-med").removeClass('disabled') : $('.voorwaarden').find(".link16-16-med").addClass('disabled');
    timeline.reversed() ? $('.voorwaarden').find(".link12-12-med").removeClass('enabled') : $('.voorwaarden').find(".link12-12-med").addClass('enabled');
    $('.voorwaarden').hasClass('open') ? $('.voorwaarden').removeClass('open') : $('.voorwaarden').addClass('open');
}


$( window ).on( "resize", function() {
    navbarTransition.refresh();
} );
