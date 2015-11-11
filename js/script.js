$(document).ready(function() {
//This is the form input
    $("form").on("submit", function(evt) {
//variables for dynamicaly created elements
        var list_items = $("#list_items");
        var value = list_items.val();
        var div = $('<div>').addClass('item')
        var p = $('<p>').text(value);
        var div2 = $('<div>').attr('id', 'list_item_edit_delete');
        var icon = $('<span>').addClass('fa fa-info');
//how elements get added to the page
        $(div2).append(icon);
        $(div).append(div2)
        $(div).prepend(p)
        $("#items").append(div);
//clears the input field to accept my entries
        list_items.val("");
//prevents the normal action that happens when inputs are submitted
        evt.preventDefault();
    })
    //this function strikes through items on list
    $('body').on('click','p',function(){
        $(this).closest('p').toggleClass('strike');
    });
});


//leaving code in case I decide to add item qty later
        //var div2 = $('<div>').addClass('tally');
        //var itemQnty = $('<input type="text" name="" id="item_Qty" placeholder="1"/>');