
$(document).ready(function(){

    console.log('moka')
    let loader = gsap.timeline();
    loader.to(
        '.hvl-inner',
        {width: "100%", duration: .75, ease: "power3.inOut"}
    );


});
