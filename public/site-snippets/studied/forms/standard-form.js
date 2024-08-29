$(document).ready(function() {

    $('input[name="Minderjarig"]').change(function () {
        let isChecked = $(this).prop('checked');
        console.log(isChecked);
    });

});
