$(document).ready(function(){
    let currentDataTypeLink, currentDataLevelLink, currentDataClassLink;
    $('input[name="onderwijsniveau-radio"]').change(function(){
        if($(this).is(':checked')){
            currentDataTypeLink = $(this).siblings('.sfb-content__item-data').attr('href')
            console.log(currentDataTypeLink)
        }
    });

});

