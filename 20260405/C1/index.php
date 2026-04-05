<?php
$json = json_decode(file_get_contents("bbs.json"), true);

if (isset($_POST["name"])) {
    $newData = [];
    $id = array_key_last($json)["id"];

    $username = $_POST["name"];
    $Rmessage = $_POST["message"];


    $newData = [
        "id" => $id,
        "name" => $username,
        "message" => $Rmessage
    ];

    $newJson = json_encode(array_push($newData, $json), JSON_UNESCAPED_UNICODE);
    file_put_contents("bbs.json", $newJson);
}

?>

<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>C1</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <form action="" method="post">
        <label for="">ユーザーネーム</label>
        <input type="text" name="name" require>
        <label for="">メッセージ</label>
        <input type="text" name="message" id="message" require>
        <button type="submit">送信</button>
    </form>

    <table>
        <thead>
            <tr>
                <th>ユーザーネーム</th>
                <th>メッセージ</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($json as $post): ?>
                <tr>
                    <th><?php echo ($post["name"]) ?></th>
                    <td><?php echo ($post["message"]) ?></td>
                </tr>
            <?php endforeach ?>
        </tbody>
    </table>
</body>

</html>