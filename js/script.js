
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

	$(".pop-form").click(function(event) {
		event.preventDefault();

		var formTitle = $(this).prevAll("h3").text();
		$(".info-form .form-title").text(formTitle);
		$(".info-form").show();
	});


	$("#p-close").click(function(event) {
		event.preventDefault();
		$(".info-form").hide();
	 });


/*


	Grrrrrrrrrrr

*/

	 $(".left").click(function(){
		 event.preventDefault();
		 var leftVal = $('.prod-wrap').css("marginLeft");

		 if(leftVal !== "0px") {
			 $('.prod-wrap').animate({
				 marginLeft: "+=1200",
			 }, 600);
		 }
	 });

	 $(".right").click(function(){
		 event.preventDefault();
		 var leftVal = $('.prod-wrap').css("marginLeft");
		 if(leftVal !== "-3600px") {
			 $('.prod-wrap').animate({
				 marginLeft: "-=1200",
			 }, 1800);
		 }
	 });

  });
