$(document).ready(function(){

    $('.mc-splide__item').on("mouseenter mouseleave", function(event){
        if (event.type === "mouseenter") {
            // Your code here when mouse enters the element
            $(this).css("background-color", "red");
        } else if (event.type === "mouseleave") {
            // Your code here when mouse leaves the element
            $(this).css("background-color", "blue");
        }
    });
})
