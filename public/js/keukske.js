console.log('hello')

$('.test').on('click', function(){

    $.ajax({
        url: 'http://164.92.134.186/keukske-actie',
        method: 'GET',
        dataType: 'json',
        data: {
            naam: 'ruben',
            mail: 'ruben@reuring.studio',
            code: ''
        },
        success: function(result){
            console.log(result)
        },
        error: function(result){
            console.log(result.errors)
        }
    })

})
