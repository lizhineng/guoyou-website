<?php

require_once '../vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


// Check for empty fields
if(empty($_POST['name'])      ||
   empty($_POST['email'])     ||
   empty($_POST['phone'])     ||
   empty($_POST['message'])   ||
   ! filter_var($_POST['email'], FILTER_VALIDATE_EMAIL))
   {
   echo "No arguments Provided!";
   return false;
   }

// passing true enables exceptions
$mail = new PHPMailer(true);

try {
    $name = strip_tags(htmlspecialchars($_POST['name']));
    $email_address = strip_tags(htmlspecialchars($_POST['email']));
    $phone = strip_tags(htmlspecialchars($_POST['phone']));
    $message = strip_tags(htmlspecialchars($_POST['message']));

    /** Server settings */

    // Enable SMTP debugging
    // 0 = off (for production use)
    // 1 = client messages
    // 2 = client and server messages
    $mail->SMTPDebug = 0;
    $mail->isSMTP();
    $mail->SMTPAuth = true;

    // Set the encryption system to use - ssl (deprecated) or tls
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    // Set the hostname of the mail server
    $mail->Host = '';

    // Username and password to use for SMTP authentication
    $mail->Username = '';
    $mail->Password = '';

    /**  Recipients */

    // this is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
    $mail->setFrom('noreply@yourdomain.com');
    // add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
    $mail->addAddress('yourname@yourdomain.com');
    $mail->addReplyTo($email_address);

    /** Content */
    $mail->Subject = "Website Contact Form:  $name";
    $mail->Body = "You have received a new message from your website contact form.\n\n" . "Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nMessage:\n$message";

    $mail->send();

    return true;
} catch (Exception $e) {
    echo $mail->ErrorInfo;
    return false;
}