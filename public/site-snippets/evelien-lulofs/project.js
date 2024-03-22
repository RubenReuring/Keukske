
$(document).ready(function(){
    $('.pc-i__content').children().each(function() {
        var $element = $(this);
        if ($element.is('figure')) {
            $element.wrap('<div class="pc-i-grid__item"></div>');
        }
    });

    var $source = $('.pc-i__content');
    var $children = $source.children();

    function isNotDivOrAnchorElement($element) {
        return !$element.is('p') && !$element.is('h1') && !$element.is('a');
    }

    function wrapConsecutiveElements($elements) {
        if ($elements.length > 0) {
            $elements.wrapAll('<div class="pc-i-grid__item"></div>');
        }
    }

    var $group = $();
    $children.each(function(index, element) {
        var $element = $(element);
        if (isNotDivOrAnchorElement($element)) {
            wrapConsecutiveElements($group);
            $group = $();
        } else {
            $group = $group.add($element);
        }
    });

    wrapConsecutiveElements($group);
});

$('.pdi-lg__rte').children('p').each(function(){

    var paragraphText = $(this).text().trim();
    if(paragraphText.length <= 1) {
        return
    } else {
        var inputString = $(this).text();
        var regex = /\[(.*?)\]/;
        var match = inputString.match(regex);
        var k = match ? match[1] : null;
        var v = null;
        var lastIndex = inputString.lastIndexOf(']');
        if (lastIndex !== -1 && lastIndex < inputString.length - 1) {
            v = inputString.substring(lastIndex + 1).trim();
        }
        console.log("k:", k);
        console.log("v:", v);


        $(
            '<div class="pdi-detail">' +
            '<div class="pdi-detail__titlewrap">' +
            '<div class="pdi-detail__dot"></div>' +
            '<p class="p12-12-sb">' + k + '</p></div>' +
            '<div class="pdi-detail__desc"><p class="p12-18-reg">' + v + '</p></div>' +
            '</div>'
        ).appendTo('.pdi-left__grid');

        console.log($(this).text());
    }
})

$(document).ready(function() {
    var currentPath = window.location.pathname;
    let linkPath, nextItem, nextItemTitle, nextItemUrl;
    $('.pnd-item__link').each(function() {
        linkPath = $(this).attr('href');
        if (currentPath === linkPath) {
            nextItem = $(this).parent().next();
            if (nextItem.length === 0) {
                nextItem = $(this).parents('.pnd-list').children().first();
            }
            nextItemTitle = nextItem.text()
            nextItemUrl = nextItem.find('a').attr('href')
            $('.project-next').attr('href', nextItemUrl)
            $('.project-next').find('.phc-center__title').find('h1').text(nextItemTitle)
            //console.log(nextItemTitle, nextItemUrl)
        }
    });

    $.ajax({
        url: nextItemUrl,
        type: 'GET',
        dataType: 'text',
        success: function(data) {
            var $html = $(data);
            let nextBackgroundSrc = $html.find('.project-hero__background').find('img').attr('src');
            let nextBackgroundSrcSet = $html.find('.project-hero__background').find('img').attr('srcset');
            let nextProjectDesc = $html.find('.phc-center__desc').find('p').text();
            $('.project-next').find('img').attr('src', nextBackgroundSrc)
            $('.project-next').find('img').attr('srcset', nextBackgroundSrcSet)
            $('.project-next').find('.phc-center__desc').find('p').text(nextProjectDesc)
            //console.log(nextBackgroundImage);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error('AJAX Error:', textStatus, errorThrown);
        }
    });
});

