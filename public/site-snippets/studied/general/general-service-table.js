$(document).ready(function() {
    let rowDataArray = [];
    $('.tt-row').each(function() {
        let text = $(this).find('.tt-row-first-item p').text().trim();
        let field1Data, field2Data;
        field1Data = $(this).find('.tt-row-right-wrap').find('.tt-row-item').eq(0).html().trim()
        field2Data = $(this).find('.tt-row-right-wrap').find('.tt-row-item').eq(1).html().trim()
        rowDataArray.push({
            text: text,
            field1: field1Data,
            field2: field2Data
        });
    });

    let tabRowTemplate = `
        <div class="ttm-row">
            <div class="ttm-row__text">
                <p class="p14-1-5-book">Row title here...</p>
            </div>
            <div class="ttm-row__detail"></div>
        </div>
    `;

    $('.ttm-content__block').each(function(index){
        $(this).empty();
        let currentBlock = $(this)
        let currentIndex = index;
        $(rowDataArray).each(function(){
            var newRow = $(tabRowTemplate);
            newRow.find('p').text(this.text);
            if(currentIndex === 0) {
                newRow.find('.ttm-row__detail').html(this.field1);
            }
            else if(currentIndex === 1) {
                newRow.find('.ttm-row__detail').html(this.field2);
            }
            $(currentBlock).append(newRow)
            console.log(newRow)
        })
    })
});
