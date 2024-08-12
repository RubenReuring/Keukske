$(document).ready(function(){

    console.log('Hi')

    $('input[name="onderwijs-niveau"]').change(function(){
        if($(this).is(':checked')){
            console.log($(this))
        }
    });

});

