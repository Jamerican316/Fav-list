$(document).ready(function() {
	$("#list_items").on("keyup change", function(){
		var value = $("value").val();
		$(".list > div").append('<div class="item">' + value 
			+ '</div>');
	});
});


