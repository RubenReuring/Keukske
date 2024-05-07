$(document).ready(function(){

    $('.mc-splide__item').on("mouseenter mouseleave", function(event){
        if (event.type === "mouseenter") {
            $(this).css("opacity", "1");
            $(this).prev("opacity", ".5");
        } else if (event.type === "mouseleave") {
            $(this).css("opacity", ".1");
            $(this).prev("opacity", ".5");
        }
    });
})
