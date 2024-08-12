$(document).ready(function(){
    let currentDataTypeLink, currentDataLevelLink, currentDataClassLink;
    var currentUrl = window.location.href;
    var baseUrl = currentUrl.split('.com')[0] + '.com';

    console.log(baseUrl);

    $('input[name="onderwijsniveau-radio"]').change(function(){
        if($(this).is(':checked')){
            currentDataTypeLink = $(this).siblings('.sfb-content__item-data').attr('href')
            console.log(currentDataTypeLink)
        }
    });

});

