
$(document).ready(function(){

    console.log('moka')
    let loader = gsap.timeline();
    loader.to(
        '.hvl-inner',
        {opacity: "1", duration: .45, ease: "power1.inOut", delay: .1}
    );
    loader.to(
        '.hvl-line',
        {width: "0em", duration: .35, ease: "power1.inOut"}
    );
    loader.to(
        '.hvl-inner',
        {width: "100%", duration: .75, ease: "power3.inOut"},
        .1
    );


});