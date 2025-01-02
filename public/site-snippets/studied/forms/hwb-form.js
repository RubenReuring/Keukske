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
            url: 'https://hook.us1.make.com/gx5u1axpfy5isstxbhladhpn35uu5ikv',
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
