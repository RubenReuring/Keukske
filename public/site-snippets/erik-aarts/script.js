let navbarTransition = gsap.timeline();
navbarTransition.to(
    '.hln-word',
    {y: "100%", stagger: 0.1, duration: 1, ease: "power3.out"}
);
