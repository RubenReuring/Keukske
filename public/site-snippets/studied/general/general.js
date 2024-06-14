function isAtTop() {
    return $(window).scrollTop() === 0;
}

let navbarTransition = gsap.timeline({paused: true});
navbarTransition.fromTo(
    '.nav',
    {backgroundColor: 'rgba(250,248,245,0)'},
    {paddingTop: ".75em", paddingBottom: ".75em", backgroundColor: 'rgba(250,248,245,1)',duration: .35, ease: "power2.out"},
);

function collapsNav() {
    navbarTransition.play();
}

if (isAtTop()) {
    navbarTransition.reverse();
} else {
    navbarTransition.play();
}
