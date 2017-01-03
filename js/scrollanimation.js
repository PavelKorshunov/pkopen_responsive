// $(document).ready(function(){
// 	var page = $("body");
// 	var work = $(".nav").find("li").first().next();
// 	work.click(function(){
// 		var scrollHeight = $("body").scrollTop();
// 		scrollBy(0, 540 - scrollHeight);
// 		// $("body").scrolly({
// 		// 	speed: 500,
// 		// 	offset: 540 - scrollHeight
// 		// });
// 		// console.log(pageHeight);
// 	});
// })
// var allHeight = $("body")[0].scrollHeight;

$(document).ready(function(){
	$('a[href^="#"]').bind('click', function (e) {
	 e.preventDefault();
	 
	var target = this.hash,
	 $target = $(target);
	 
	$('html, body').stop().animate({
	 'scrollTop': $target.offset().top
	 }, 700, 'swing', function () {
	 window.location.hash = target;
	 });
	 });
})