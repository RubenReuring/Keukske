$('.classes-period').each(function() {
    var dataArray = [];
    var dataSource = $(this).find('.cpm-data_rte');
    dataSource.find('p').each(function() {
        var dataRow = $(this).text().trim();
        if (dataRow) {
            var dataObject = {};
            // Use regex to extract key-value pairs
            var regex = /\b(\w+)\((.*?)\)/g;
            var match;
            while (match = regex.exec(dataRow)) {
                var key = match[1];
                var value = match[2];
                dataObject[key] = value;
            }
            dataArray.push(dataObject);
        }
    });
    console.log(dataArray)
});
