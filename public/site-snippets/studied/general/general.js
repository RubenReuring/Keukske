$(document).ready(function() {
    let lastScrollTop = 0;

    let navbarTransition = gsap.timeline({paused: true});
    navbarTransition.fromTo(
        '.nav',
        {backgroundColor: 'rgba(250,248,245,0)'},
        {paddingTop: ".75em", paddingBottom: ".75em", backgroundColor: 'rgba(250,248,245,1)', duration: .35, ease: "power2.out"},
    );

    $(window).scroll(function() {
        let currentScrollTop = $(this).scrollTop();
        if (currentScrollTop > lastScrollTop) {
            // Scrolling down
            navbarTransition.play();
        } else {
            // Scrolling up
            navbarTransition.reverse();
        }
        lastScrollTop = currentScrollTop;
    });
});
