$(document).ready(function() {

    $('input[name="Minderjarig"]').change(function () {
        let isChecked = $(this).prop('checked');

        if(isChecked){
            $('.cc-fb_wrap.form-parental').css('display', 'block')
            $('#Voornaam---Ouder').attr('required', 'required');
            $('#Achternaam---Ouder').attr('required', 'required');
            $('#Mail---Ouder').attr('required', 'required');
            $('#Telefoonr---Ouder').attr('required', 'required');
        } else if(!isChecked){
            $('.cc-fb_wrap.form-parental').css('display', 'none')
            $('#Voornaam---Ouder').removeAttr('required');
            $('#Achternaam---Ouder').removeAttr('required');
            $('#Mail---Ouder').removeAttr('required');
            $('#Telefoonr---Ouder').removeAttr('required');
        }

    });

    $('.cc-form__inner').submit(function(event) {
        event.preventDefault();
        var formData = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: 'https://hook.us1.make.com/6zy87vymaidf3hvgnid1k5dtuy0mf8mw',
            data: formData,
            success: function(response) {
                // console.log('Form data successfully posted.');
                // Ga door met de standaard submit actie van Webflow
                $('#myForm').off('submit').submit();
            },
            error: function(error) {
                // console.error('Error posting form data:', error);
                // Optioneel: voeg foutafhandelingslogica toe
            }
        });
    });

});
