$(document).ready(function() {

    // Minderjarigheidscontrole
    $('input[name="Minderjarig"]').change(function () {
        let currentVal = $(this).val()
        console.log(currentVal)
    });

});
