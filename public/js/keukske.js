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
        success: function (xhr, status, data){
            console.log(xhr.responseJSON)
        },
        error: function(xhr, status, data) {
            if(xhr.responseJSON.errors) {
                console.log(xhr.responseJSON.errors)
            }
        },
        complete: function (xhr, status, data, response){
            console.log(xhr)
            console.log(response)
        }
    })

})
