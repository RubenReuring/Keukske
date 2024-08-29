$(document).ready(function() {

    $('input[name="Minderjarig"]').change(function () {
        let isChecked = $(this).prop('checked');

        if(isChecked){
            $('.cc-fb_wrap.form-parental').css('display', 'block')
            $('#Aanhef---Ouder').attr('required');
            $('#Voornaam---Ouder').attr('required');
            $('#Achternaam---Ouder').attr('required');
            ('#Mail---Ouder').attr('required');
            ('#Telefoonr---Ouder').attr('required');
        } else if(!isChecked){
            $('.cc-fb_wrap.form-parental').css('display', 'none')
            $('#Aanhef---Ouder').removeAttr('required');
            $('#Voornaam---Ouder').removeAttr('required');
            $('#Achternaam---Ouder').removeAttr('required');
            ('#Mail---Ouder').removeAttr('required');
            ('#Telefoonr---Ouder').removeAttr('required');
        }

    });

});
