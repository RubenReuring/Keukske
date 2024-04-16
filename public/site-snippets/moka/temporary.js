
$(document).ready(function(){

    console.log('moka')
    let loader = gsap.timeline();
    loader.to(
        '.hvl-inner',
        {opacity: "1", duration: .45, ease: "power1.inOut", delay: .3}
    );
    loader.to(
        '.hvl-line',
        {width: "0em", duration: .65, ease: "power3.inOut"},
        .8
    );
    loader.to(
        '.hvl-inner',
        {width: "100%", duration: 1.2, ease: "power4.inOut"},
        .9
    );
    loader.to(
        '.hero-content',
        {opacity: "1", duration: .55, ease: "power2.inOut"},
        2
    );
    loader.to(
        '.hvc-inner',
        {opacity: "1", duration: .45, ease: "power1.inOut", delay: .1},
        2.1
    );

});

$(document).ready(function() {

    const $images = $('.hvc-inner .hvc-imagewrap');
    let currentIndex = 0;
    const intervalTime = 1000; // Change this value to adjust the delay between image changes

    function toggleVisibility() {
        $images.eq(currentIndex).addClass('visible');
        $images.not($images.eq(currentIndex)).removeClass('visible');
        currentIndex = (currentIndex + 1) % $images.length;
    }

    setInterval(toggleVisibility, intervalTime);

});
