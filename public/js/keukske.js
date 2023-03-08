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
        success: function (data){
            console.log(data);
        },
        error: function(xhr, status, data) {
            if(xhr.responseJSON.errors.naam){
                console.log(xhr.responseJSON.errors.naam);
            }
            if(xhr.responseJSON.errors.mail){
                console.log(xhr.responseJSON.errors.mail);
            }
            if(xhr.responseJSON.errors.code){
                console.log(xhr.responseJSON.errors.code);
            }
        },
        complete: function (data){
            console.log(data);
        }
    })

})
