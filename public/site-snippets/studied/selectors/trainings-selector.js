$(document).ready(function(){
    let currentDataTypeLink, currentDataLevelLink, currentDataClassLink;
    var currentUrl = window.location.href;
    var baseUrl = currentUrl.split(/[.](com|io|nl)/)[0] + currentUrl.match(/[.](com|io|nl)/)[0];

    function extractItems(parsedHTML) {
        // Cache the list element to minimize scope of search
        var datasetList = parsedHTML.find('.dataset-list');

        // Efficiently map each dataset-item to an object
        var items = datasetList.find('.dataset-item').map(function() {
            var $item = $(this);  // Cache the current item for efficiency
            return {
                vakcode: $item.find('.dataset-item_vakcode p').text().trim(),
                name: $item.find('.dataset-item_name p').text().trim(),
                link: $item.find('.dataset-item__link').attr('href')
            };
        }).get(); // .get() converts the jQuery object to a plain array

        return items;
    }

    $('input[name="onderwijsniveau-radio"]').change(function(){
        if($(this).is(':checked')){
            currentDataTypeLink = $(this).siblings('.sfb-content__item-data').attr('href')
        }
        var fullUrl = baseUrl + currentDataTypeLink;
        $.ajax({
            url: fullUrl,
            method: 'GET',
            success: function(data) {
                var parsedHTML = $(data);
                var items = extractItems(parsedHTML);
                console.log(items);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.error('AJAX request failed:', textStatus, errorThrown);
            }
        });
    });

});

