$(document).ready(function(){

    $('.mc-splide__item').on("mouseenter mouseleave", function(event){
        if (event.type === "mouseenter") {
            $(this).css("opacity", "1")
            $(this).prev().css("opacity", ".5");
            $(this).next().css("opacity", ".5");

            $(this).css("height", "6em")
            $(this).prev().css("height", "5.5em")
            $(this).next().css("height", "5.5em");
        } else if (event.type === "mouseleave") {
            $(this).css("opacity", ".1")
            $(this).prev().css("opacity", ".1")
            $(this).next().css("opacity", ".1");

            $(this).css("height", "5em")
            $(this).prev().css("height", "5em")
            $(this).next().css("height", "5em");
        }
    });

    $('.mc-splide__item').on('click', function(){
        if(!$(this).hasClass('item-active')){
            $(this).addClass('item-active')
        } else if($(this).hasClass('item-active')){
            $(this).removeClass('item-active')
        }

    });
})
