let blurStickySection = ScrollTrigger.create({
    trigger: $('.pc-image__collection'),
    start: () => 'top bottom',
    end: () => 'bottom top',
    markers : true,
    invalidateOnRefresh: true,
    onEnter: function(){
        console.log('a')
    },
    onEnterBack: function(){
        console.log('b')
    },
    onLeave: function(){
        console.log('c')
    },
    onLeaveBack: function(){
        console.log('d')
    }
});
