$(document).ready(function(){
    let currentDataTypeLink, currentDataLevelLink, currentDataClassLink;
    var currentUrl = window.location.href;
    var baseUrl = currentUrl.split(/[.](com|io|nl)/)[0] + currentUrl.match(/[.](com|io|nl)/)[0];

    function extractItems(parsedHTML) {
        var items = [];

        // Find all .dataset-item elements within .dataset-list
        parsedHTML.find('.dataset-list .dataset-item').each(function() {
            // Extract the vakcode, name, and href from each item
            var vakcode = $(this).find('.dataset-item_vakcode p').text().trim();
            var name = $(this).find('.dataset-item_name p').text().trim();
            var href = $(this).find('.dataset-item__link').attr('href');

            // Create an object and push it to the items array
            items.push({
                vakcode: vakcode,
                name: name,
                link: href
            });
        });

        // Log the items array to the console
        console.log(items);
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
                extractItems(parsedHTML);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.error('AJAX request failed:', textStatus, errorThrown);
            }
        });
    });

});

