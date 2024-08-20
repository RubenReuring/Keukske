// Step 1: Clear any existing intervals that might be running
for (let i = 1; i < 99999; i++) {
    window.clearInterval(i);
}

// Step 2: Remove the --min-height styles and reset data-height attributes
$(".site-header__nav-wrapper > ul > li ul").each(function() {
    this.style.removeProperty("--min-height");
    this.style.transition = "none"; // Disable any transitions
    $(this).removeAttr("data-height");
    $(this).removeAttr("data-original-height");
    console.log("Reset min-height, transition, and data-height for:", this);
});

// Step 3: Set the original heights in a data attribute for later use
$(".site-header__nav-wrapper > ul > li ul").each(function() {
    const originalHeight = this.offsetHeight || this.clientHeight;
    $(this).attr("data-original-height", originalHeight);
    console.log("Set data-original-height for:", this);
});


// Function to log the highest original data-height of visible <ul> on mouseenter
function logHighestOriginalMinHeight(element) {
    let maxHeight = 0;
    let highestUl = null;

    $(element).find('ul').each(function() {
        const ul = $(this);
        const computedStyle = window.getComputedStyle(this);

        // Check if the ul is visible
        if (computedStyle.visibility === 'visible' && computedStyle.opacity === '1') {
            const originalHeight = parseFloat(ul.attr('data-original-height'));
            if (originalHeight > maxHeight) {
                maxHeight = originalHeight;
                highestUl = this;
            }
        }
    });

    if (highestUl) {
        console.log('Highest original data-height <ul>: ', highestUl, ' with height: ', maxHeight);
        $(element).parents('.menu-item--depth-1').children('ul').each(function(){
            $(this).css('min-height', maxHeight)
        })
    } else {
        console.log('No visible <ul> found.');
    }
}

// Function to calculate and log the height of the current or parent <ul> on mouseleave
function logHighestOriginalMinHeightOnLeave(element) {
    let maxHeight = 0;
    let targetUl = null;

    // Check the current element's own <ul> and its parents' <ul> heights
    $(element).find('ul').addBack().parents('ul').each(function() {
        const ul = $(this);
        const computedStyle = window.getComputedStyle(this);

        // Check if the ul is visible
        if (computedStyle.visibility === 'visible' && computedStyle.opacity === '1') {
            const originalHeight = parseFloat(ul.attr('data-original-height'));
            if (originalHeight > maxHeight) {
                maxHeight = originalHeight;
                targetUl = this;
            }
        }
    });

    if (targetUl) {
        console.log('Highest original data-height <ul> on leave: ', targetUl, ' with height: ', maxHeight);
        $(element).parents('.menu-item--depth-1').children('ul').each(function(){
            $(this).css('min-height', maxHeight)
        })
    } else {
        console.log('No appropriate <ul> found on leave.');
        $(element).parents('.menu-item--depth-1').children('ul').each(function(){
            $(this).css('min-height', 0)
        })
    }
}

// Step 4: Main logic to calculate and log the tallest <ul> after CSS transition with timeout management
let hoverTimeout;
const delay = 20; // Delay in milliseconds

for (let i = 1; i <= 10; i++) {
    $('.menu-item.menu-item--depth-' + i).on('mouseenter', function() {
        if ($(this).hasClass('menu-item--has-children')) {
            // Clear any existing timeout
            clearTimeout(hoverTimeout);

            // Wait for a short period to allow the CSS transition to complete
            hoverTimeout = setTimeout(() => {
                logHighestOriginalMinHeight(this);
            }, delay);

        }
    }).on('mouseleave', function() {
        // Clear the timeout if the user hovers out before it completes
        clearTimeout(hoverTimeout);

        // Immediately check and log the height of the current or parent <ul> on mouseleave
        logHighestOriginalMinHeightOnLeave(this);
    });
}


/////////

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

