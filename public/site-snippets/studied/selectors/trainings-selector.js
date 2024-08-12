$(document).ready(function(){
    let currentDataTypeLink, currentDataLevelLink;
    var currentUrl = window.location.href;
    var baseUrl = currentUrl.split(/[.](com|io|nl)/)[0] + currentUrl.match(/[.](com|io|nl)/)[0];
    let currentAjaxRequest = null;

    function extractItems(parsedHTML) {
        var datasetList = parsedHTML.find('.dataset-list');
        var items = datasetList.find('.dataset-item').map(function() {
            var $item = $(this);
            return {
                vakcode: $item.find('.dataset-item_vakcode p').text().trim(),
                name: $item.find('.dataset-item_name p').text().trim(),
                link: $item.find('.dataset-item__link').attr('href')
            };
        }).get();
        return items;
    }

    function checkOverflow(element) {
        if (element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth) {
            element.classList.add('list-overflowing');
        } else {
            element.classList.remove('list-overflowing');
        }
    }

    function populateSecondLayer(items) {
        $('#third-layer').empty(); // Clear third layer when second layer is being repopulated
        $('#second-layer').empty(); // Clear the second layer right before populating

        items.forEach(function(item) {
            var template = `
                <div role="listitem" class="sfb-content__item w-dyn-item">
                    <label class="sfb-radio w-radio">
                        <a href="${item.link}" class="sfb-content__item-data">${item.vakcode}</a>
                        <div class="w-form-formradioinput w-form-formradioinput--inputType-custom sfb-radiotrigger w-radio-input"></div>
                        <input type="radio" data-name="opleiding-radio" id="radio-${item.vakcode}" name="opleiding-radio" style="opacity:0;position:absolute;z-index:-1" value="${item.vakcode}">
                        <span class="p14-1-book w-form-label" for="radio-${item.vakcode}">${item.name}</span>
                        <div class="sfb-radio__selectedicon">
                            <div class="svg-embed w-embed">
                                <svg class="tm-selected-check" width="21" height="21" viewBox="0 0 21 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 21C16.299 21 21 16.299 21 10.5C21 4.70101 16.299 0 10.5 0C4.70101 0 0 4.70101 0 10.5C0 16.299 4.70101 21 10.5 21ZM16.0749 8.18197C16.2538 7.99915 16.369 7.84864 16.4204 7.72926C16.7557 6.95648 15.9733 6.17447 15.219 6.5055C15.0977 6.55913 14.9593 6.66524 14.8041 6.82441C12.7491 8.93168 10.6897 11.0349 8.62626 13.1335C8.61158 13.1485 8.5969 13.1485 8.58166 13.1335C7.73654 12.2789 6.8948 11.4196 6.05757 10.5562C5.69457 10.1825 5.12043 10.2252 4.7817 10.5649C4.64903 10.6975 4.56378 10.8504 4.52596 11.0234C4.43902 11.419 4.57507 11.6941 4.86186 11.9882C5.85039 13.0003 6.83947 14.0107 7.82969 15.0205C8.00074 15.1952 8.14752 15.3071 8.2689 15.3561C8.63925 15.5067 8.99378 15.4132 9.27718 15.1243C10.7865 13.5825 12.2961 12.0409 13.8057 10.4993C14.5621 9.72686 15.3185 8.95445 16.0749 8.18197Z" fill="currentColor"></path>
                                </svg>
                            </div>
                        </div>
                    </label>
                </div>
            `;
            $('#second-layer').append(template);
        });

        // Check if the second layer is overflowing
        checkOverflow(document.getElementById('second-layer'));

        $('input[name="opleiding-radio"]').change(function(){
            if($(this).is(':checked')){
                currentDataLevelLink = $(this).siblings('.sfb-content__item-data').attr('href');
                loadThirdLayer(currentDataLevelLink);
            }
        });
    }

    function loadThirdLayer(link) {
        var fullUrl = baseUrl + link;

        if (currentAjaxRequest) {
            currentAjaxRequest.abort(); // Abort the previous request
        }

        $('input[name="onderwijsniveau-radio"], input[name="opleiding-radio"]').prop('disabled', true);

        currentAjaxRequest = $.ajax({
            url: fullUrl,
            method: 'GET',
            success: function(data) {
                var parsedHTML = $(data);
                var items = extractItems(parsedHTML);
                populateThirdLayer(items);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                if (textStatus !== 'abort') {
                    console.error('AJAX request failed:', textStatus, errorThrown);
                }
            },
            complete: function() {
                $('input[name="onderwijsniveau-radio"], input[name="opleiding-radio"]').prop('disabled', false);
            }
        });
    }

    function populateThirdLayer(items) {
        $('#third-layer').empty(); // Clear the third layer before repopulating

        items.forEach(function(item) {
            var template = `
                <a href="${item.link}" class="tm-sl-link w-inline-block">
                    <p class="p14-1-book">${item.name}</p>
                    <div class="tm-sll-iconwrap">
                        <div class="iconembed w-embed">
                            <svg class="tm-sll-arrow" width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.12796 0.75L10.1726 4.79462L6.12796 8.83924L5.53871 8.24999L8.57742 5.21129L0 5.21129L0 4.37796L8.57742 4.37796L5.53871 1.33926L6.12796 0.75Z" fill="#23272A"></path>
                            </svg>
                        </div>
                    </div>
                </a>
            `;
            $('#third-layer').append(template);
        });

        // Check if the third layer is overflowing
        checkOverflow(document.getElementById('third-layer'));
    }

    $('input[name="onderwijsniveau-radio"]').change(function(){
        if($(this).is(':checked')){
            currentDataTypeLink = $(this).siblings('.sfb-content__item-data').attr('href');
        }
        $('#second-layer').empty(); // Clear second layer when first layer changes
        $('#third-layer').empty(); // Clear third layer when first layer changes

        if (currentAjaxRequest) {
            currentAjaxRequest.abort(); // Abort any previous requests
        }

        var fullUrl = baseUrl + currentDataTypeLink;
        currentAjaxRequest = $.ajax({
            url: fullUrl,
            method: 'GET',
            success: function(data) {
                var parsedHTML = $(data);
                var items = extractItems(parsedHTML);
                populateSecondLayer(items);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                if (textStatus !== 'abort') {
                    console.error('AJAX request failed:', textStatus, errorThrown);
                }
            }
        });
    });

    // Initial check for overflow on page load
    checkOverflow(document.getElementById('second-layer'));
    checkOverflow(document.getElementById('third-layer'));
});
