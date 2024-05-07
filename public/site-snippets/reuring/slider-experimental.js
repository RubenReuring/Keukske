$(document).ready(function(){

    $('.mc-splide__item').on("mouseenter mouseleave", function(event){
        if (event.type === "mouseenter") {
            // Your code here when mouse enters the element
            $(this).css("opacity", "1");
        } else if (event.type === "mouseleave") {
            // Your code here when mouse leaves the element
            $(this).css("opacity", ".1");
        }
    });
})
