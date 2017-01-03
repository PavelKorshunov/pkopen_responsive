<?php
	$recipient = "korsun4@mail.ru";
	$sitename = "pkopen.ru";

	$name = trim($_POST["name"]);
	$email = trim($_POST["email"]);
	$message = trim($_POST["message"]);
	$textforme = "Имя: $name \nEmail: $email \nСообщение: $message";

	$pagetitle = "Заявка с сайта \" $sitename\"";
	mail($recipient, $pagetitle, $textforme, "Content-type: text/plain; charset=\"utf-8\"\n From: $recipient");
?>