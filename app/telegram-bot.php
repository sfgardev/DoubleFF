<?php



    $token = "1537364839:AAGg2vXCR0hPg6zXPhjwBPfM6BZIC5IYFFY";
    $chatid = "523698584";
    sendMessage($chatid, "Hello World", $token);

    function sendMessage($chatID, $messaggio, $token) {
        echo "sending message to " . $chatID . "\n";
    
        $url = "https://api.telegram.org/bot" . $token . "/sendMessage?chat_id=" . $chatID;
        $url = $url . "&text=" . urlencode($messaggio);
        $ch = curl_init();
        $optArray = array(
                CURLOPT_URL => $url,
                CURLOPT_RETURNTRANSFER => true
        );
        curl_setopt_array($ch, $optArray);
        $result = curl_exec($ch);
        curl_close($ch);
        return $result;
    }
?>