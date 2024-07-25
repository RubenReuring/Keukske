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

    var periodBody = $(this).find('.cpm-wrap');
    periodBody.empty();

    var periodLessonTemplate = `<div className="cpm-card">
        <div class="cpm-left">
            <p class="p14-14-med">Moment 1</p>
            <p class="p12-12-reg">Kleine omschrijving</p>
        </div>
        <div class="card-tags">
            <div class="card-tag"><p class="p12-12-med cpm-date-value">18 januari</p></div>
            <div class="card-tag"><p class="p12-12-med cpm-time-value">13:00-15:00</p></div>
        </div>
    </div>`

    dataArray.forEach(function(data, index) {
        var newRow = $(periodLessonTemplate);
        newRow.find('.p14-14-med').text(data.titel || "Title");
        newRow.find('.p13-1-5-reg').text(data.beschrijving || "Beschrijving");
        newRow.find('.cpm-date-value').text(data.datum || "Datum");
        newRow.find('.cpm-time-value').text(data.tijdvak || "Tijdvak");
        periodBody.append(newRow);
    });
});
