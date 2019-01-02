<?php
    include 'connect.php';
    $user = isset($_POST['user']) ? $_POST['user'] : '1';
    $pwd = isset($_POST['paw']) ? $_POST['paw'] : '1';
    //写查询语句
    $sql= "SELECT * FROM user WHERE tel='$user' AND paw='$pwd'";
    //执行语句
    $res= $conn->query($sql);
    if($res->num_rows > 0){
        echo 1;
    }else{
        echo 0;
    }
    $res->close();
    $conn->close();
?>