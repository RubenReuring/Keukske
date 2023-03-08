$('.submit').on('click', function (){
    console.log('hello');
    event.preventDefault();
    $.ajax({
        method: "GET",
        url: "/keukske-actie",
        data: $(this).serialize(),
        dataType: 'json',
        success: function (data){
            console.log(data);
        }
    })
})
