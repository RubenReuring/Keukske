$(document).ready(function(){

    console.log('Hi')

    $('input[name="onderwijsniveau-radio"]').change(function(){
        if($(this).is(':checked')){
            console.log($(this))
        }
    });

});

