<?php
    $nombre = $_POST['name'];
    $correo = $_POST['correo'];
    $telefono = $_POST['tel'];
    $comentarios = $_POST['comentarios'];

    if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
        echo $ip = $_SERVER['HTTP_CLIENT_IP'];
    } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        echo $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
    } else {
        echo $ip = $_SERVER['REMOTE_ADDR'];
    }

    $ip = $_SERVER['REMOTE_ADDR'];
    // $captcha = $_POST['g-recaptcha-response'];
    // $secretKey = "6LfkrqkgAAAAAI4MRZrcGtyXGChA7jtUmybAvwdv";

    // $res = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secretKey&response=$captcha&remoteip=$ip");

    // $atributos = json_decode($res, TRUE);

    // $errors = array();
    // if (!$atributos['success']) {
    //     $errors[] = 'Verificación captcha obligatoria';
    // }

    ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );

    $from = 'admin@racoondevs.com';
    $to = "martinmartinezcamacho@hotmail.com";
    $subject = "Contacto RacoonDevs";

    $message = "NOMBRE : " . $nombre  . ",\r\n";
    $message .= "CORREO : " . $correo . " \r\n";
    $message .= "TELEFONO : " . $telefono . " \r\n";
    $message .= "IP : " . $ip . " \r\n";
    $message .= "COMENTARIOS : " . $comentarios . " \r\n";

    $headers = "From:" . $from . " \r\n";
    $headers .= "X-Mailer: PHP/" . phpversion() . " \r\n";
    $headers .= "Mime-Version: 1.0 \r\n";
    $headers .= "Content-Type: text/plain";
    mail($to,$subject, utf8_decode($message), $headers);
    echo "The email message was sent.";
    //header("Location:https://racoondevs.com");
?>
