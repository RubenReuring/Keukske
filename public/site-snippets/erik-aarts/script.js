let navbarTransition = gsap.timeline();
let navbarWordArray = $('.hln-word__secondary');
let navbarWordWrapArray = $('.hln-word__secondary--wrap');
navbarTransition.to(
    navbarWordArray,
    {y: "100%", stagger: 0.075, duration: 1, ease: "power4.out"}
);
navbarTransition.to(
    navbarWordWrapArray,
    {width: "0", duration: .8, ease: "power4.out"},
    .8
);
navbarTransition.to(
    '.home-link__name',
    {gridColumnGap: "0.075em", duration: .9, ease: "power4.out"},
    .8
);

