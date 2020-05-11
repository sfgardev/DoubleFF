<?php 
    $fName = 'Имя: '.$_POST['first_name'].' <br />';
    $fMail =  'Почта: '.$_POST['email'].' <br />';
    $fMessage =  'Сообщение: '.$_POST['text'].' <br />';
    $AllInOne =  $fName.$fMail.$fMessage;
    $to = 'info@doubleff.ru'; 
    $headers="From: Doubleff <info@doubleff.ru>\nReply-to:info@doubleff.ru\nContent-Type: text/html; charset=\"utf-8\"\n"; 
    // функция, которая отправляет наше письмо
    mail($to, 'Свяжитесь с нами', $AllInOne, $headers); 


    if(!empty($name) && !empty($surname) && !empty($email) && !empty($message)) {
        $email_validate = filter_var($email, FILTER_VALIDATE_EMAIL); 
    
        if(check_length($name, 2, 25) && check_length($surname, 2, 50) && check_length($message, 2, 1000) && $email_validate) {
            mail($to, 'Свяжитесь с нами', $AllInOne, $headers); 
            echo "Спасибо за заявку, мы скоро с Вами свяжемся!";
        }
        else{
            echo "Введенные данные некорректны";
        }
    }
    else { // добавили сообщение
        echo "Заполните пустые поля";
?>