
for (let i = 1; i < 99999; i++) window.clearInterval(i);

$(".site-header__nav-wrapper > ul > li ul").each(function() {
    this.style.removeProperty("--min-height");
    this.style.transition = "none";
    $(this).removeAttr("data-height").removeAttr("data-original-height");
});

$(".site-header__nav-wrapper > ul > li ul").each(function() {
    const originalHeight = this.offsetHeight || this.clientHeight;
    $(this).attr("data-original-height", originalHeight);
});

function logHighestOriginalMinHeight(element) {
    let maxHeight = 0;
    $(element).find('ul').each(function() {
        const ul = $(this), computedStyle = window.getComputedStyle(this);
        if (computedStyle.visibility === 'visible' && computedStyle.opacity === '1') {
            const originalHeight = parseFloat(ul.attr('data-original-height'));
            if (originalHeight > maxHeight) maxHeight = originalHeight;
        }
    });
    $(element).parents('.menu-item--depth-1').children('ul').css('min-height', maxHeight);
}

function logHighestOriginalMinHeightOnLeave(element) {
    let maxHeight = 0;
    $(element).find('ul').addBack().parents('ul').each(function() {
        const ul = $(this), computedStyle = window.getComputedStyle(this);
        if (computedStyle.visibility === 'visible' && computedStyle.opacity === '1') {
            const originalHeight = parseFloat(ul.attr('data-original-height'));
            if (originalHeight > maxHeight) maxHeight = originalHeight;
        }
    });
    $(element).parents('.menu-item--depth-1').children('ul').css('min-height', maxHeight || 0);
}

let hoverTimeout, delay = 20;

for (let i = 1; i <= 10; i++) {
    $('.menu-item.menu-item--depth-' + i).on('mouseenter', function() {
        if ($(this).hasClass('menu-item--has-children')) {
            clearTimeout(hoverTimeout);
            hoverTimeout = setTimeout(() => logHighestOriginalMinHeight(this), delay);
        }
    }).on('mouseleave', function() {
        clearTimeout(hoverTimeout);
        logHighestOriginalMinHeightOnLeave(this);
    });
}

