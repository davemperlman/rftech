<?php
	require 'PHPMailer-master/PHPMailerAutoload.php';
	$mail = new PHPMailer;

	$mail->setFrom($_POST['email'], $_POST['name']);
	$mail->addAddress('info@refined-tech.com', 'Refined Technologies');
	$mail->Subject = $_POST['subject'];
	$mail->Body = $_POST['message'];

	if(!$mail->send()) {
		$error = 'There was an error ' . $mail->ErrorInfo;
		echo json_encode($error);
	}else{
		$success = 'Thank you for your message.';
		echo json_encode($success);
	}