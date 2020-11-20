<?php
  $destinatario = 'rg2607836@gmail.com';
  $nombre = $_POST['name'];
  $email = $_POST['email'];
  $msg = $_POST['message'];

  $header = "Enviado desde la pagina de Poboha";
  $msgCompleto = $msg . "\nAtentamente: " . $nombre;

  mail($destinatario, $nombre, $msg, $header);
?>