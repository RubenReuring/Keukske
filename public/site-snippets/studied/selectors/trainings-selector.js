$(document).ready(function(){
    let currentDataTypeLink, currentDataLevelLink, currentDataClassLink;
    var currentUrl = window.location.href;
    var baseUrl = currentUrl.split(/[.](com|io|nl)/)[0] + currentUrl.match(/[.](com|io|nl)/)[0];

    console.log(baseUrl);

    $('input[name="onderwijsniveau-radio"]').change(function(){
        if($(this).is(':checked')){
            currentDataTypeLink = $(this).siblings('.sfb-content__item-data').attr('href')
            console.log(currentDataTypeLink)
        }
        var fullUrl = baseUrl + currentDataTypeLink;
        $.ajax({
            url: fullUrl,  // The URL to send the request to
            method: 'GET', // The HTTP method to use (GET is the default)
            success: function(data) {
                console.log(data); // Log the response data to the console
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.error('AJAX request failed:', textStatus, errorThrown); // Log any errors to the console
            }
        });
    });

});

