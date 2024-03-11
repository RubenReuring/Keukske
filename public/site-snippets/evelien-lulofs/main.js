let lightNavElems = $('.home-visual, .home-werkwijze')
function toggleNavLight(turnOn) {
    if (turnOn) {
        $('.navbar').addClass('navbar-light')
    } else {
        $('.navbar').removeClass('navbar-light')
    }
}


let centerNav = ($('.navbar').outerHeight() - ( $('.navbar').height() / 2 ));
function handleResize() {
    centerNav = ($('.navbar').outerHeight() - ( $('.navbar').height() / 2 ));
    st.refresh();
    console.log(centerNav)
}
window.addEventListener('resize', handleResize);


    let st;
    $(lightNavElems).each(function(){
        st = ScrollTrigger.create({
            trigger: this,
            start: () => 'top ' + centerNav,
            end: 'bottom top',
            markers : true,
            invalidateOnRefresh: true,
            onEnter: function(){
                toggleNavLight(true);
            },
            onEnterBack: function(){
                toggleNavLight(true);
            },
            onLeave: function(){
                toggleNavLight(false);
            },
            onLeaveBack: function(){
                toggleNavLight(false);
            }
        });
    });


