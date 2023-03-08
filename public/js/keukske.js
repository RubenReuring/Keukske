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
        success: function (xhr, data){
            console.log(data)
            console.log(xhr)
        },
        complete: function (xhr, data){
            console.log(data)
            console.log(xhr)
        }
    })

})
