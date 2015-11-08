$(document).ready(function() {
    var i = 1;
    $("form").on("submit", function(evt) {
       //create a loop to ++i each item
        var list_items = $("#list_items");
        var value = list_items.val();
        var div = $('<div>').addClass('item').text(value);
        var div2 = $('<div>').addClass('tally');
        var count = $('<p>').text(i);
        var icon = $('<i>').addClass('fa fa-info');
        var div3 = $('<div>').addClass('info');
        $(div3).append(icon);
        $(div2).append(count);
        $(div).append(div2, div3)
        $("#items").prepend(div);

        list_items.val("");
        evt.preventDefault();
    
    });
   
});
