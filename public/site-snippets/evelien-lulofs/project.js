
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
        // If <p> has text
        console.log($(this).text());
    }
})
