$(document).ready(function() {
    $('.cc-block__top.accordion').on('click', function() {
        $(this).toggleClass('accordion-active');
        $(this).next('.cc-block__body').toggleClass('accordion-body-active');
    });
    $(document).on('click', '.ccb-accordion__head', function() {
        $(this).toggleClass('row-accordion-active');
        $(this).next('.ccb-accordion__body').toggleClass('row-accordion-body-active');
    });

    $('.cc-block.program').each(function() {
        var dataArray = [];
        var dataSource = $(this).find('.cc-program_datasource');
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

        // Log the array for the current program block
        console.log(dataArray);

        // Find the program body and empty it
        var programBody = $(this).find('.cc-block__body');
        programBody.empty();

        // Template HTML block
        var template = `
        <a href="#" class="cc-block__row accordion">
            <div class="ccb-accordion__head">
                <div class="ccb-accordion__title">
                    <p class="p13-1-bold">00</p>
                    <h3 class="p13-1-reg">Title</h3>
                </div>
                <div class="ccb-accordion__icon">
                    <div class="small-beigedark-label">
                        <p class="p13-1-5-reg">Date</p>
                    </div>
                    <div class="iconembed w-embed">
                        <svg class="ccb-cross-icon" width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.00029 14.5C6.61369 14.5 6.30029 14.1866 6.30029 13.8V1.2C6.30029 0.813401 6.61369 0.5 7.00029 0.5C7.38689 0.5 7.70029 0.813401 7.70029 1.2V13.8C7.70029 14.1866 7.38689 14.5 7.00029 14.5Z" fill="#2C3338"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 7.50469C0 7.11809 0.313401 6.80469 0.7 6.80469H13.3C13.6866 6.80469 14 7.11809 14 7.50469C14 7.89129 13.6866 8.20469 13.3 8.20469H0.7C0.313401 8.20469 0 7.89129 0 7.50469Z" fill="#2C3338"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="ccb-accordion__body">
                <div class="ccb-accordion__desc">
                    <p class="p13-1-bold">Onderwerp</p>
                    <p class="p13-1-5-reg">Description</p>
                </div>
                <div class="ccb-accordion__labels">
                    <div class="small-beigedark-label">
                        <p class="p13-1-5-reg">Duration</p>
                    </div>
                </div>
            </div>
        </a>`;

        // Iterate over dataArray and populate the template
        dataArray.forEach(function(data, index) {
            var newRow = $(template);
            var numberText = (index + 1).toString().padStart(2, '0'); // Add leading zero for numbers < 10
            newRow.find('.p13-1-bold').first().text(numberText);
            newRow.find('.p13-1-reg').first().text(data.titel || "Title");
            newRow.find('.p13-1-5-reg').first().text(data.datum || "Date");
            newRow.find('.ccb-accordion__desc .p13-1-5-reg').text(data.beschrijving || "Hier komt een korte beschrijving.");
            newRow.find('.ccb-accordion__labels .p13-1-5-reg').text(data.duur || "45 minuten");

            // Append the new row to the program body
            programBody.append(newRow);
        });
    });

    $('input[name="Pakket"]').change(function() {
        if($('#Losse-lessen').is(':checked')){
            $('.classes-selector').css('display', 'block');
        } else if(!$('#Losse-lessen').is(':checked')){
            $('.classes-selector').css('display', 'none');
        }
        if ($('#Volledig-programma').is(':checked')) {
            console.log('Lijst met Basis programma lessen');
        } else if ($('#Verkort-programma').is(':checked')) {
            console.log('Lijst met verkort programma lessen');
        }
    });


});
