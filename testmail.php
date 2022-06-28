<?php
    $correo = $_POST['correo'];
    $comentarios = $_POST['comentarios'];

    ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );
    $from = $correo;
    $to = "contacto@racoondevs.com";
    $subject = "Checking PHP mail";
    $message = $comentarios;
    $headers = "From:" . $from;
    mail($to,$subject,$message, $headers);
    echo "The email message was sent.";
    header("Location:https://racoondevs.com");
?>
