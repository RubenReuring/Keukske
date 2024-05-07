$(document).ready(function(){

    $('.mc-splide__item').on("mouseenter mouseleave", function(event){
        if (event.type === "mouseenter") {
            $(this).addClass("item-hover")
            $(this).prev().addClass("sibling-hover")
            $(this).next().addClass("sibling-hover")
        } else if (event.type === "mouseleave") {
            $(this).removeClass("item-hover")
            $(this).prev().removeClass("sibling-hover")
            $(this).next().removeClass("sibling-hover")
        }
    });

    $('.mc-splide__item').on('click', function(){
        $('.mc-splide__item').removeClass('item-active')
        $('.mc-splide__item').removeClass('sibling-active')
        if(!$(this).hasClass('item-active')){
            $(this).addClass('item-active')
            $(this).prev().addClass("sibling-active")
            $(this).next().addClass("sibling-active")

            let imageURL = $(this).find('img').attr('src');

            $('.main-content__imagewrap.overlay').find('img').on('load', function(){
                // Image has finished loading, now you can execute an alert
                alert('Image loaded successfully!');
            });

            $('.main-content__imagewrap.overlay').find('img').attr('src', imageURL)

            //$('.main-content__imagewrap.overlay').css('height', '65vh')
            //Set dom item
            //Set image to dom item
            //Scale animation
            //
        }

        // if($(this).hasClass('item-active')){
        //     $(this).removeClass('item-active')
        //     $(this).prev().removeClass("sibling-active")
        //     $(this).next().removeClass("sibling-active")
        // }

    });
})
