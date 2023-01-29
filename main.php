<?php



$to = "lisovskii.kolya@gmail.com";
$subject = "Письмо с сайта";
$charset = "utf-8";
$headerss ="Content-type: text/html; charset=$charset\r\n";
$headerss.="MIME-Version: 1.0\r\n";
$headerss.="Date: ".date('D, d M Y h:i:s O')."\r\n";


$msg = "Заявка с сайта - Delicato \r\n";
$msg .= "<br> Имя: ".$_POST["name"]."\r\n";
$msg .= "<br> Email: ".$_POST["email"]."\n";
$msg .= "<br> Сообщение: ".$_POST["message"]."\n";

mail($to, $subject, $msg, $headerss);


?>