# Envoyer Mail par PHP

Utilisation Php-Mailer

Pour que ca marche, telecharager sur github la branche master et la copier en entiere dans ht docs.

Quand on fait un projet on peut ensuite envoyer le mail de cette facon:


	
	<?php 

	
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require '../PHPMailer-master/src/Exception.php';
	require '../PHPMailer-master/src/PHPMailer.php';
	require '../PHPMailer-master/src/SMTP.php';



	$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
	try {
		//Server settings
		$mail->SMTPDebug = 0;                                 // Enable verbose debug output
		$mail->isSMTP();                                      // Set mailer to use SMTP
		$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
		$mail->SMTPAuth = true;                               // Enable SMTP authentication
		$mail->Username = 'addressegmail';                 // SMTP username
		$mail->Password = 'pass';                           // SMTP password
		$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
		$mail->Port = 465;                                    // TCP port to connect to

		//Recipients
		$mail->setFrom('no-reply@morgan.com', 'no-reply Morgan');
		// $mail->addAddress('joe@example.net', 'Joe User');     // Add a recipient
		$mail->addAddress('uofy8@wimsg.com', 'client Name');    //destinataire           // Name is optional
		$mail->addReplyTo('no-reply@test.com', 'Information');
	   // $mail->addCC('cc@example.com');
		//$mail->addBCC('bcc@example.com');

		//Attachments
		// $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
		// $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

		//Content
		$mail->isHTML(true);                                  // Set email format to HTML
		$mail->Subject = 'This is a mail send by PHP';
		$mail->Body    = 'This is the HTML message body <b>in bold!</b>';
		$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
		$mail->SMTPOptions = array(
		  'ssl' => array(
			  'verify_peer' => false,
			  'verify_peer_name' => false,
			  'allow_self_signed' => true
		  )
		);

		$mail->send();
		echo 'Message has been sent';
	} catch (Exception $e) {
		echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
	}


TRES IMPORTANT: 
Ca fonctionne comme ca mais de base il y a un soucis avec le certificat ssl qui semble t'il n'est pas trouve sur le pc, donc ici avec la ligne $SMTPOptions ici on desactive en quelque sorte le check du certificat ssl. Ce n'est pas secure, a ne pas faire en production. Trouver une solution pour resoudre se probleme de certificat ssl