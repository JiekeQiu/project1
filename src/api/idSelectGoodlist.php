<?php
    /*
        利用id查询商品列表，渲染详情页
            get：
                id：商品id
            返回：
                gid：商品id,
                list：商品数据
     */
    //详情页渲染
    include 'connect.php';

    $gid=isset($_GET['gid'])? $_GET['gid'] : '1';

    $sql="SELECT * FROM  list WHERE gid=$gid";

    $res=$conn->query($sql);
    // var_dump($res);
    $data=$res->fetch_all(MYSQLI_ASSOC);

    $detail=array(
        'gid'=>$gid,
        'list'=>$data
    );

    echo json_encode($detail,JSON_UNESCAPED_UNICODE);
    $conn->close();
?>