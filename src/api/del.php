<?php

   include 'connect.php';

    $id=isset($_GET['gid']) ? $_GET['gid'] : '1';
    $sql="DELETE FROM `indent` WHERE gid in($id)";

    $res=$conn->query($sql);

    if($res){
        echo 'yes';
    }
    $conn->close();

?>