<?php
    $nombre = $_POST['name'];
    $correo = $_POST['correo'];
    $telefono = $_POST['tel'];
    $comentarios = $_POST['comentarios'];

    ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );
    $from = $correo;
    $to = "contacto@racoondevs.com";
    $subject = "Contacto RacoonDevs";

    $message = "NOMBRE : " . $nombre  . ",\r\n";
    $message .= "CORREO : " . $correo . " \r\n";
    $message .= "TELEFONO : " . $telefono . " \r\n";
    $message .= "COMENTARIOS : " . $comentarios . " \r\n";

    $headers = "From:" . $from . " \r\n";
    $header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
    $header .= "Mime-Version: 1.0 \r\n";
    $header .= "Content-Type: text/plain";
    mail($to,$subject, utf8_decode($message), $headers);
    echo "The email message was sent.";
    header("Location:https://racoondevs.com");
?>
