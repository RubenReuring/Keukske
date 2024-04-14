
$(document).ready(function(){

    console.log('moka')
    let loader = gsap.timeline();
    loader.to(
        '.hvl-inner',
        {opacity: "1", duration: .45, ease: "power1.inOut", delay: .1}
    );
    loader.to(
        '.hvl-line',
        {width: "0em", duration: .55, ease: "power3.inOut"},
        .4
    );
    loader.to(
        '.hvl-inner',
        {width: "100%", duration: 1, ease: "power4.inOut"},
        .5
    );


});
