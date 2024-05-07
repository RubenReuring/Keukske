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
            $('.main-content').append('<div class="main-content__imagewrap overlay"><img src="" loading="lazy" alt="" class="mci-image"></div>');
            //$('.main-content').find('.main-content__imagewrap.overlay:last')
            $('.main-content__imagewrap.overlay:last').find('img').on('load', function(){
                $('.main-content__imagewrap.overlay:last').css('height', '65vh')
            });
            $('.main-content__imagewrap.overlay:last').find('img').attr('src', imageURL)
            if($('.main-content').find('.main-content__imagewrap.overlay').length > 2){
                $('.main-content__imagewrap.overlay:last').on('transitionend', function(event){
                    $('.main-content__imagewrap.overlay:last').prev().prevAll('.main-content__imagewrap.overlay').remove();

                });
            }
        }
    });
})
