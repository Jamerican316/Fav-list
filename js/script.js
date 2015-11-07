$(document).ready(function() {
    $("form").on("submit", function(evt) {
        var list_items = $("#list_items");
        var value = list_items.val();
        $("#list").append("<div class='item'>" + value + "</div>");

        list_items.val("");

        evt.preventDefault();
    });
}):
