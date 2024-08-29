$(document).ready(function() {

    $('input[name="Minderjarig"]').change(function () {
        let isChecked = $(this).prop('checked');

        if(isChecked){
            $('.cc-fb_wrap.form-parental').css('display', 'block')
        } else if(!isChecked){
            $('.cc-fb_wrap.form-parental').css('display', 'none')
        }

    });

});
