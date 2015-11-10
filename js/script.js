$(document).ready(function() {

    $("form").on("submit", function(evt) {
        var list_items = $("#list_items");
        var value = list_items.val();
        var div = $('<div>').addClass('item')
        //leaving code in case I decide to add item qty later
        //var div2 = $('<div>').addClass('tally');
        //var itemQnty = $('<input type="text" name="" id="item_Qty" placeholder="1"/>');
        var p = $('<p>').text(value);
        var div2 = $('<div>').attr('id', 'list_item_edit_delete');
        var icon = $('<span>').addClass('fa fa-info');
        $(div2).append(icon);
        $(div).append(div2)
        $(div).prepend(p)
        $("#items").append(div);
        list_items.val("");
        evt.preventDefault();
    })
    $('#list_item_edit_delete').on('p', 'click', function(){
        $(this).toggleClass('strike');
    });
});
