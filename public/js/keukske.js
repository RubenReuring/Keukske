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
        url: "/keukske-verifycode",
        data: $(this).serialize(),
        dataType: 'json',
        success: function (xhr){
            console.log(xhr)
            alert(xhr.result)
        }
    })
})

let charLimit = 1;
$(".codeInput").keydown(function(e) {

    if (e.which == 8 && this.value.length == 0) {
        $(this).prev('.codeInput').focus();
    }
}).keyup (function () {
    if (this.value.length >= charLimit) {
        $(this).next('.codeInput').focus();
        return false;
    }
});
