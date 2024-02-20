let navbarTransition = gsap.timeline();
let navbarWordArray = $('.hln-word__secondary');
let navbarWordWrapArray = $('.hln-word__secondary--wrap');
navbarTransition.to(
    navbarWordArray,
    {y: "100%", stagger: 0.15, duration: .9, ease: "power3.out"}
);
navbarTransition.to(
    navbarWordWrapArray,
    {width: "0", duration: 1, ease: "power3.out"},
    .65
);

