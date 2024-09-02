$(document).ready(function() {

    $('input[name="Minderjarig"]').change(function () {
        let isChecked = $(this).prop('checked');

        if(isChecked){
            $('.cc-fb_wrap.form-parental').css('display', 'block')
            $('#Aanhef---Ouder').attr('required', 'required');
            $('#Voornaam---Ouder').attr('required', 'required');
            $('#Achternaam---Ouder').attr('required', 'required');
            $('#Mail---Ouder').attr('required', 'required');
            $('#Telefoonr---Ouder').attr('required', 'required');
        } else if(!isChecked){
            $('.cc-fb_wrap.form-parental').css('display', 'none')
            $('#Aanhef---Ouder').removeAttr('required');
            $('#Voornaam---Ouder').removeAttr('required');
            $('#Achternaam---Ouder').removeAttr('required');
            $('#Mail---Ouder').removeAttr('required');
            $('#Telefoonr---Ouder').removeAttr('required');
        }

    });

});
