
/*

$(".pop-form").click(fucntion(event) {
$(".info-form").show()
});


$(".closeX").click(fucntion(event) {
$(".info-form").hide()
});

I will always start JS files this way ☠

*/


/*
$(".pop-form").on("click", function(){
 $(".info-form").show({
 });
});

$(".close").on("click", function(){
 $(".info-form").hide({
 });
});

Works but doesnt know form header
*/

$( document ).ready(function() {

	// Show ant hide the form

	$(".pop-form").click(function(event) {
		// stop the href of the <a> from doing anything
		event.preventDefault();

		// get the title of the service where the button is clicked
		var formTitle = $(this).prevAll("h3").text();
		// write that title to the form title
		$(".info-form .form-title").text(formTitle);
		//show the form
		$(".info-form").show();
	});


	$("#p-close").click(function(event) {
		// stop the href of the <a> from doing anything
		event.preventDefault();
		//hide the form
		$(".info-form").hide();
	 });

  });
