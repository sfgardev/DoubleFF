<?php
 
$method = $_SERVER['REQUEST_METHOD'];
 
//Script Foreach
$c = true;
if ( $method === 'POST' ) {
 
  $client_name = trim($_POST["client_name"]);
  $admin_email  = trim($_POST["admin_email"]);
  $text = trim($_POST["text"]);
 
  foreach ( $_POST as $key => $value ) {    
    if ( $value != "" && $key != "client_name" && $key != "admin_email" && $key != "text" ) {
      $message .= "
      " . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
        <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
        <td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
      </tr>
      ";
    }
  }
} else if ( $method === 'GET' ) {
 
  $client_name = trim($_GET["client_name"]);
  $admin_email  = trim($_GET["admin_email"]);
  $text = trim($_GET["text"]);
 
  foreach ( $_GET as $key => $value ) {
    if ( $value != "" && $key != "client_name" && $key != "admin_email" && $key != "text" ) {
      $message .= "
      " . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
        <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
        <td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
      </tr>
      ";
    }
  }
}
 
$message = "<table style='width: 100%;'>$message</table>";
 
function adopt($text) {
  return '=?UTF-8?B?'.Base64_encode($text).'?=';
}
 
$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
'From: '.adopt($client_name).' <'.$admin_email.'>' . PHP_EOL .
'Reply-To: '.$admin_email.'' . PHP_EOL;
 
mail($admin_email, adopt($text), $message, $headers );