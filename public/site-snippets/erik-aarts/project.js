let blurStickySection = ScrollTrigger.create({
    trigger: $('.pc-image__collection'),
    start: () => 'top bottom',
    end: () => 'bottom top',
    markers : true,
    invalidateOnRefresh: true,
    onEnter: function(){
        console.log('a')
        $('.ps-image__blur').addClass('visibile')
    },
    onLeaveBack: function(){
        $('.ps-image__blur').removeClass('visibile')
    }
});
