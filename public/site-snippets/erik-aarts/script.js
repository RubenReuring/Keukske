let navbarTransition = gsap.timeline();
navbarTransition.to(
    '.hln-word',
    {y: "125%"},
    {y: "0%", stagger: 0.1, duration: 1, ease: "power3.out"}
);
