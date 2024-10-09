$(document).ready(function() {



    function numberSections(){
        let visibleIndex = 1;
        $('.cc-fb__num').each(function(index) {
            if ($(this).closest('.cc-form__block').is(':visible')) {
                var num = visibleIndex.toString().padStart(2, '0');
                $(this).find('p').text(num);
                visibleIndex++;
            }
        });
    };
    numberSections();

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
    $(document).on('change', 'input[name="lessons[]"]', function(){
        if($('input[name="lessons[]"]').is(':checked')) {
            $('input[name="lessons[]"]').removeAttr('required');
        } else {
            $('input[name="lessons[]"]').attr('required', 'required');
        }
    });

    let classCheckboxTemplate = `
                        <div class="cc-fb__content-inner__flexitem">
                            <label class="w-checkbox checkboxblock-button">

                                <div class="w-checkbox-input w-checkbox-input--inputType-custom radioblock-buttonelem"></div>
                                <input type="checkbox" name="lessons[]" id="Les" data-name="Les" style="opacity:0;position:absolute;z-index:-1" required="required">

                                <div class="checkboxblock-textwrap">
                                    <p class="p13-1-bold">01</p>
                                    <p class="p13-1-reg">Titel</p>
                                </div>
                                <div class="checkboxblock-icon">
                                    <div class="checkboxblock-icon_wrap">
                                        <div class="iconembed w-embed">
                                            <svg class="checkboxblock-checkmark" width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.6255 1.21497C11.5775 1.32638 11.47 1.46687 11.303 1.63749C9.18804 3.79746 7.07307 5.95689 4.95863 8.11686C4.69413 8.38652 4.36323 8.47371 4.01759 8.33323C3.90431 8.28748 3.76731 8.18306 3.60766 8.01997C2.68348 7.07751 1.76036 6.13451 0.837756 5.18989C0.570091 4.91539 0.443109 4.65865 0.524251 4.28941C0.559554 4.12794 0.639115 3.9853 0.762936 3.86151C1.07908 3.54448 1.61493 3.50465 1.95373 3.85343C2.73512 4.65918 3.52072 5.46117 4.30949 6.25884C4.32372 6.27284 4.33742 6.27284 4.35111 6.25884C6.27693 4.30018 8.19905 2.3372 10.117 0.370464C10.2619 0.221909 10.391 0.122873 10.5042 0.0728161C11.2082 -0.236135 11.9385 0.493722 11.6255 1.21497Z" fill="white"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <span class="radioblock-label hidden w-form-label" for="hierdenaam">Checkbox</span>
                            </label>
                        </div>
                        `;
    let summaryRowTemplate = `
    <div class="cc-fb__summarylist-item">
        <p class="p13-1-reg number">00</p>
        <p class="p13-1-reg title">Naam van de les</p>
    </div> `

    function showClassSelector(){

        function setSummaryList(){
            console.log('test')
            $('.summary-list').css('display', 'block');
            $('.cc-fb_summarylist__content').empty();

            $(document).on('change', 'input[name="lessons[]"]', function(){
                $('.cc-fb_summarylist__content').empty();
                $('input[name="lessons[]"]:checked').each(function(){
                    let itemNumber = $(this).siblings('.checkboxblock-textwrap').find('.p13-1-bold').text();
                    let itemTitle = $(this).siblings('.checkboxblock-textwrap').find('.p13-1-reg').text();
                    console.log($(this),itemNumber,itemTitle)
                    var newSummaryRow = $(summaryRowTemplate);
                    newSummaryRow.find('.p13-1-reg.number').text(itemNumber);
                    newSummaryRow.find('.p13-1-reg.title').text(itemTitle);
                    $('.cc-fb_summarylist__content').append(newSummaryRow);
                });
            });
        };
        setSummaryList();

        function setClassList(items){
            $('.cc-form__block.classes-selector').find('.cc-fb__content-inner.flexvertical').empty();
            $(items).each(function(){
                let itemNumber = $(this).find('.ccb-accordion__title').find('p').text();
                let itemTitle = $(this).find('h3').text();
                var newClassCheckbox = $(classCheckboxTemplate);
                newClassCheckbox.find('input').first().attr('data-name', itemTitle || 'Error')
                    .attr('id', itemNumber + '-' + itemTitle || 'Error')
                    .attr('value', itemNumber + '-' + itemTitle || 'Error');
                newClassCheckbox.find('span.radioblock-label.hidden').text(itemTitle || 'Error');
                newClassCheckbox.find('span.radioblock-label.hidden').attr('for', itemTitle || 'Error')
                newClassCheckbox.find('.checkboxblock-textwrap').children().eq(0).text(itemNumber || '00');
                newClassCheckbox.find('.checkboxblock-textwrap').children().eq(1).text(itemTitle || 'Error');

                $('.cc-form__block.classes-selector').find('.cc-fb__content-inner.flexvertical').append(newClassCheckbox);
            });
        };
        setClassList();

        if($('#Volledig-programma').is(':checked') || $('#Verkort-programma').is(':checked')){
            if($('#Losse-lessen').is(':checked')){
                $('.classes-selector').css('display', 'block');
                setSummaryList()

                numberSections();
                if($('#Volledig-programma').is(':checked')){
                    let classes = $('#base-program-content').find('.cc-block__body.program').children();
                    setClassList(classes);
                } else if ($('#Verkort-programma').is(':checked')){
                    let classes = $('#short-program-content').find('.cc-block__body.program').children();
                    setClassList(classes);
                }
            } else if(!$('#Losse-lessen').is(':checked')){
                numberSections();
                $('.classes-selector').css('display', 'none');
                $('.cc-form__block.classes-selector').find('.cc-fb__content-inner.flexvertical').empty();
                $('.summary-list').css('display', 'none');
                $('.cc-fb_summarylist__content').empty();
            }
        }
    };

    $('input[name="Pakket"]').change(function() {
        let currentVal = $(this).val()
        $('.summary-package').find('p').text(currentVal)
        console.log(currentVal)
        showClassSelector()
    });

    $('input[name="Programma"]').change(function() {
        let currentVal = $(this).val()
        $('.summary-program').find('p').text(currentVal)
        showClassSelector()
    });


    $('.cc-form__inner').submit(function(event) {
        event.preventDefault();
        $('#form-training-name').val($('#vakcode-form-data').text());
        var formData = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: 'https://hook.us1.make.com/r88w7o6dpbo9gd79cikdkn8mgdeg8l0e',
            data: formData,
            success: function(response) {
                // console.log('Form data successfully posted.');
                // Ga door met de standaard submit actie van Webflow
                $('#myForm').off('submit').submit();
            },
            error: function(error) {
                // console.error('Error posting form data:', error);
                // Optioneel: voeg foutafhandelingslogica toe
            }
        });
    });

    $('input[name="Minderjarig"]').change(function () {
        let isChecked = $(this).prop('checked');

        if(isChecked){
            $('.cc-fb_wrap.form-parental').css('display', 'block')
            $('#Aanhef---Ouder').attr('required', 'required');
            $('#Voornaam---Ouder').attr('required', 'required');
            $('#Achternaam---Ouder').attr('required', 'required');
            $('#Mail---Ouder').attr('required', 'required');
            $('#Telefoonr---Ouder').attr('required', 'required');
        } else if(!isChecked){
            $('.cc-fb_wrap.form-parental').css('display', 'none')
            $('#Aanhef---Ouder').removeAttr('required');
            $('#Voornaam---Ouder').removeAttr('required');
            $('#Achternaam---Ouder').removeAttr('required');
            $('#Mail---Ouder').removeAttr('required');
            $('#Telefoonr---Ouder').removeAttr('required');
        }

    });

});
