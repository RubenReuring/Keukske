let navbarTransition = gsap.timeline();
navbarTransition.to(".hln-word", {
    duration: 0.5,
    opacity: 0,
    y: -100,
    stagger: 0.1,
    ease: "back.in"
});
