$(document).ready(function() {

	$("#spinWheel").click(function() {
		var points = Math.floor((Math.random() * 10) + 1);
		$("#spinArea").html("Spin: $ " + points);
	});

}); // end doc ready function

