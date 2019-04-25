const url = 'main.php';
const command = 'auto_complete_multi_location';

$(document).ready(function () {
    function updateTextBox(event, ui) {
        $(this).val(ui.item.name);
        return false;
    }

    $('#sugg').autocomplete({
        // minLength: 1,
        delay: 500,
        focus: updateTextBox,
        select: updateTextBox,
        source: function (request, response){
            $.ajax({
                url,
                method: 'POST',
                dataType: 'json',
                data: {keyword: request.term, command},
                success: (function (data) {
                    response(data);
                })
            });
        }
    })
        .autocomplete('instance')._renderItem = function (ul, item) {
        let output;
        if (item.type == 0) {
            output = `<li><i class="fas fa-plane"></i><span>${item.name}</span></li>`
        } else if (item.type == 1) {
            output = `<li><i class="fas fa-map-marker-alt"></i><span>${item.name}</span></li>`
        } else {
            output = `<li><i class="fas fa-ship"></i><span>${item.name}</span></li>`
        }
        return $('<li id="bc-1">')
            .append(output)
            .appendTo(ul);
    }
});
