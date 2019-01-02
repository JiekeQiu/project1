<?php
    include 'connect.php';
    $id = isset($_GET['gid']) ? $_GET['gid'] : '1';
    $num = isset($_GET['num']) ? $_GET['num'] : '5';
    $sql = "UPDATE `indent` set num='$num' WHERE gid='$id'";
    $res =$conn->query($sql);
//  var_dump($res);
    if($res){
        echo '成功';
    }else{
        echo '失败';
    }   
?>