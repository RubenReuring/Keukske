$('.test').on('click', function (){
    console.log('hello');

    $.ajax({
        method: "GET",
        url: "/keukske-actie",
        data: { naam: "", mail: "ruben@reuring.studio", code: "" },
        success: function (data){
            console.log(data);
        }
    })
})
