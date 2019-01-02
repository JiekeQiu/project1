<?php
    /*
        接收前端传过来的号码，验证数据库是否存在该号码，返回相关信息给前端
            get：
                tel：待验证号码
            返回：
                0 || 1 //0代表号码已存在，1代表号码不存在
     */


    //连接数据库
    include 'connect.php';
    
    //接收参数
    $tel=isset($_GET['tel']) ? $_GET['tel'] : '';

    //写查询语句
    $sql="SELECT *FROM user WHERE tel='$tel'";
    
    //执行语句
    $res=$conn->query($sql);//结果集

    if($res->num_rows>0){//num_rows存记录的条数，所有超过0就意味着存在
        //数据库存在该用户名
        echo 0;
    }else{
        echo 1;
    }
    
    //关闭结果集和数据库
    $res->close();
    $conn->close();
    