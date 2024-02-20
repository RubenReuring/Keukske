let navbarTransition = gsap.timeline();
let navbarWordArray = $('.hln-word__secondary');
let navbarWordWrapArray = $('.hln-word__secondary--wrap');
navbarTransition.to(
    navbarWordArray,
    {y: "100%", stagger: 0.15, duration: .95, ease: "power3.out"}
);
navbarTransition.to(
    navbarWordWrapArray,
    {width: "0", stagger: 0.15, duration: 1.1, ease: "power3.out"},
    .65
);

