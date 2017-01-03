$(document).ready(function(){
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$("#name").val("");
			$("#email").val("");
			$("#form").find("input[type=text], textarea").val("");
			alert("Спасибо! Ваше письмо успешно отправлено.");
		});
		return false;
	});
});