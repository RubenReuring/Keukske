
$(document).ready(function() {

    let navbarTransition = gsap.timeline({paused: true});
    let navbarWordArray = $('.hln-word__secondary');
    let navbarWordWrapArray = $('.hln-word__secondary--wrap');
    // navbarTransition.to(
    //     navbarWordArray,
    //     {y: "100%", stagger: 0.075, duration: .8, ease: "power4.inOut"}
    // );
    // navbarTransition.to(
    //     navbarWordWrapArray,
    //     {width: "0", duration: .8, ease: "power4.inOut"},
    //     .65
    // );
    // navbarTransition.to(
    //     '.home-link__name',
    //     {gridColumnGap: "0.075em", duration: .9, ease: "power4.inOut"},
    //     .65
    // );
    // navbarTransition.fromTo(
    //     '.navbar',
    //     {backgroundColor: 'rgba(255,255,255,0)'},
    //     {paddingTop: "1em", paddingBottom: "1em", backgroundColor: 'rgba(255,255,255,1)',duration: .8, ease: "power4.out"},
    //     .35
    // );

    function collapsNav() {
        navbarTransition.play();
    }

    if (isAtTop()) {
        navbarTransition.reverse();
    } else {
        navbarTransition.play();
    }

    $(window).scroll(function() {
        if (isAtTop()) {
            navbarTransition.reverse();
        } else {
            navbarTransition.play();
        }
    });

    $('.inline-filter__link').on('click', function(){
        $(this).hasClass('disabled') ? console.log('Find and trigger on') : console.log('Find and trigger off')
    })

});



