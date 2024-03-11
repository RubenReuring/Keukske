// Nav Coloring
    let lightNavElems = $('.home-visual, .home-werkwijze, .project-hero, .project-next')
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
    }
    window.addEventListener('resize', handleResize);
    let st;
    $(lightNavElems).each(function(){
        st = ScrollTrigger.create({
            trigger: this,
            start: () => 'top ' + centerNav,
            end: () => 'bottom ' + centerNav,
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

// Custom Cursor Hovering
    let cursorArrowHover = $('.hpg-project__imagewrap')
    $(cursorArrowHover).each(function(){
        $(this).mouseenter(function() {
            $('.cursor-large__arrow').click();
        });
        $(this).mouseleave(function() {
            $('.cursor-large__arrow').click();
        });
    })

