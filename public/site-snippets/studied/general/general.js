$(document).ready(function() {
    let lastScrollTop = 0;

    let navbarTransition = gsap.timeline({paused: true});
    navbarTransition.fromTo(
        '.nav',
        {y: '0%'},
        {y: "-100%", duration: .34, ease: "power3.out"},
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
