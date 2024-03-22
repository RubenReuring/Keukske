
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


$.ajax({
    url: '/projects/flinker',
    type: 'GET',
    dataType: 'text',
    success: function(data) {
        // Parse the returned data as a jQuery object
        var $html = $(data);

        // Find elements with a specific class inside the parsed HTML
        var $foundElements = $html.find('.h70-70-reg').text();

        // Log the found elements
        console.log($foundElements);
    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.error('AJAX Error:', textStatus, errorThrown);
    }
});
