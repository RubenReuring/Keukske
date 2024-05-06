
$(document).ready(function(){
    let loader = gsap.timeline();
    //Start
    loader.to(
        '.hvl-inner',
        {opacity: "1", duration: .55, ease: "power1.inOut"},
        .75
    );
    // Positioning
    loader.to(
        '.hvl-line',
        {width: "0em", duration: .65, ease: "power3.inOut"},
        1.25
    );
    loader.to(
        '.hvl-inner',
        {width: "100%", height: "100%", duration: 1.2, ease: "power4.inOut"},
        1.25
    );
    // Content show
    loader.to(
        '.body',
        {backgroundColor: "#ffffff", duration: 1.55, ease: "power1.inOut"},
        2
    );
    loader.to(
        '.hvl-letterblock',
        {color: "#485250", duration: 1.55, ease: "power1.inOut"},
        2
    );
    loader.to(
        '.hvl-line',
        {backgroundColor: "#485250", duration: 1.55, ease: "power1.inOut"},
        2
    );
    loader.to(
        '.hero-content',
        {opacity: "1", duration: .55, ease: "power2.inOut"},
        2.25
    );
    loader.to(
        '.hvc-inner',
        {opacity: "1", duration: .55, ease: "power1.inOut", delay: .1},
        2.25
    );
});

$(document).ready(function() {
    const $images = $('.hvc-inner .hvc-imagewrap');
    let currentIndex = 0;
    const intervalTime = 1000; // Change this value to adjust the delay between image changes
    let tickerInterval;

    function toggleVisibility() {
        $images.eq(currentIndex).addClass('visible');
        $images.not($images.eq(currentIndex)).removeClass('visible');
        currentIndex = (currentIndex + 1) % $images.length;
    }
    function startTicker() {
        tickerInterval = setInterval(toggleVisibility, intervalTime);
    }
    function stopTicker() {
        clearInterval(tickerInterval);
    }
    startTicker(); // Start the ticker initially
    $('.hvc-inner').on('mouseenter', function() {
        stopTicker();
    });
    $('.hvc-inner').on('mouseleave', function() {
        startTicker();
    });
});
