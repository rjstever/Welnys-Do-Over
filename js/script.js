
/*

$(".pop-form").click(fucntion(event) {
$(".info-form").show()
});


$(".closeX").click(fucntion(event) {
$(".info-form").hide()
});

*/

$(".pop-form").on("click", function(){
 $(".info-form").show({
 });
});

$(".close").on("click", function(){
 $(".info-form").hide({
 });
});