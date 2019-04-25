<?php
//if(isset($_POST['data']) && is_string($_POST['data'])) {
//    $_POST['data'] = json_decode($_POST['data']);
//}

//if(isset($_POST['data']->keyword) && isset($_POST['data']->command)) {
//$keyword = $_POST['data']->keyword;
//$command = $_POST['data']->command;

if(isset($_POST['keyword']) && isset($_POST['command'])) {
    $keyword = $_POST['keyword'];
    $command = $_POST['command'];
    $token = "4d72a1a44295979bfea519926bb85df7";

    $input = http_build_query(array(
        'keyword' => $keyword,
        'command' => $command,
        'token' => $token));

    $opts = array('http' =>
        array(
            'method' => 'POST',
            'header' => 'Content-type: application/x-www-form-urlencoded',
            'content' => $input
        )
    );

    $context = stream_context_create($opts);
    $response = file_get_contents("https://www.bookcityride.co.il/new/exam/autocomplete.php", false, $context);
    echo $response;
}