// $('.submit').on('click', function (){
//     console.log($(this).serialize());
//     console.log('hello');
//     event.preventDefault();
//     $.ajax({
//         method: "GET",
//         url: "/keukske-actie",
//         data: $(this).serialize(),
//         dataType: 'json',
//         success: function (data){
//             console.log(data);
//         }
//     })
// })

$('.cookie-form').submit(function (){
    event.preventDefault();
    $.ajax({
        method: "GET",
        url: "/keukske-actie",
        data: $(this).serialize(),
        dataType: 'json',
        success: function (xhr){
            console.log(xhr)
            alert(xhr.result)
        }
    })
})

$('.codeInput').keyup(function(e) {
    if (this.value.length === this.maxLength) {
        let next = $(this).data('next');
        $('#n' + next).focus();
    }
    if (e.which == 8 && this.value.length == 0) {
        $(this).prev('.inputs').focus();
    }
});
