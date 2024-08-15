// Step 1: Clear any existing intervals that might be running
for (let i = 1; i < 99999; i++) {
    window.clearInterval(i);
}

// Step 2: Remove the --min-height styles and set transition to none for all relevant elements
$(".site-header__nav-wrapper > ul > li ul").each(function() {
    this.style.removeProperty("--min-height");
    this.style.transition = "none"; // Disable any transitions
    $(this).removeAttr("data-height");
    console.log("Removed --min-height, transition, and data-height for:", this);
});

// Step 3: Disable the original setHeight function if it exists
if (typeof window.setHeight === 'function') {
    window.setHeight = function() {
        console.log("setHeight function disabled for debugging purposes");
    };
}

// Function to calculate and log the tallest visible <ul> on mouseenter
function logHighestVisibleUl(element) {
    let maxHeight = 0;
    let highestUl = null;

    $(element).find('ul').each(function() {
        const ul = $(this);
        const computedStyle = window.getComputedStyle(this);

        // Check if the ul is visible
        if (computedStyle.visibility === 'visible' && computedStyle.opacity === '1') {
            const ulHeight = ul.outerHeight() || ul.height();
            if (ulHeight > maxHeight) {
                maxHeight = ulHeight;
                highestUl = this;
            }
        }
    });

    if (highestUl) {
        console.log('Highest <ul>: ', highestUl, ' with height: ', maxHeight);
        console.log(element)
        $(element).parents('.menu-item--depth-1').children('ul').css('min-height', maxHeight)
    } else {
        console.log('No visible <ul> found.');
    }
}

// Function to calculate and log the height of the current or parent <ul> on mouseleave
function logCurrentOrParentUlHeight(element) {
    let maxHeight = 0;
    let targetUl = null;

    // Check the current element's own <ul> height
    const currentUlHeight = $(element).outerHeight() || $(element).height();
    if (currentUlHeight > maxHeight) {
        maxHeight = currentUlHeight;
        targetUl = element;
    }

    // Check the closest visible parent <ul> if applicable
    $(element).parents('ul').each(function() {
        const parentUl = $(this);
        const computedStyle = window.getComputedStyle(this);

        if (computedStyle.visibility === 'visible' && computedStyle.opacity === '1') {
            const parentUlHeight = parentUl.outerHeight() || parentUl.height();
            if (parentUlHeight > maxHeight) {
                maxHeight = parentUlHeight;
                targetUl = this;
            }
        }
    });

    if (targetUl) {
        console.log('Current or Parent <ul>: ', targetUl, ' with height: ', maxHeight);
        $(element).parents('.menu-item--depth-1').children('ul').css('min-height', 0)
    } else {
        console.log('No appropriate <ul> found.');
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
                logHighestVisibleUl(this);
            }, delay);
        }
    }).on('mouseleave', function() {
        // Clear the timeout if the user hovers out before it completes
        clearTimeout(hoverTimeout);

        // Immediately check and log the height of the current or parent <ul> on mouseleave
        logCurrentOrParentUlHeight(this);
    });
}
