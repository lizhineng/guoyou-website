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

// load environment variables
$dotenv = new Dotenv\Dotenv(realpath(__DIR__.'/..'));
$dotenv->load();

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
    $mail->SMTPDebug = strtolower(getenv('APP_DEBUG')) == 'true';
    $mail->isSMTP();
    $mail->SMTPAuth = true;

    // Set the encryption system to use - ssl (deprecated) or tls
    $mail->SMTPSecure = 'tls';
    $mail->Port = getenv('MAIL_PORT') + 0;

    // Set the hostname of the mail server
    $mail->Host = getenv('MAIL_HOST');

    // Username and password to use for SMTP authentication
    $mail->Username = getenv('MAIL_USERNAME');
    $mail->Password = getenv('MAIL_PASSWORD');

    /**  Recipients */

    // this is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
    $mail->setFrom(getenv('MAIL_FROM'));
    // add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
    $mail->addAddress(getenv('MAIL_TO'));
    $mail->addReplyTo($email_address);

    // Send mail with CC if it's provided
    if ($mail_cc = getenv('MAIL_CC')) {
        $mail->addCC($mail_cc);
    }

    /** Content */
    $mail->Subject = "Website Contact Form:  $name";
    $mail->Body = "You have received a new message from your website contact form.\n\n" . "Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nMessage:\n$message";

    $mail->send();

    return true;
} catch (Exception $e) {
    echo $mail->ErrorInfo;
    return false;
}