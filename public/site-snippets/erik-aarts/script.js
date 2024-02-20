let navbarTransition = gsap.timeline();
let navbarWordArray = $('.hln-word__secondary');
navbarTransition.to(
    navbarWordArray,
    {y: "100%", stagger: 0.1, duration: 1, ease: "power3.out"}
);
navbarTransition.fromTo(
    navbarWordArray,
    {width: "0%"},
    {width: "100%", stagger: 0.1, duration: 1, ease: "power3.out"}
);
