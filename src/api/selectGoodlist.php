<?php
    /*
        查询商品列表接口(兼具分页功能)
            get:
                page：需要渲染的页码,
                qty：每页显示多少条
            返回：
                {
                    total：总条数,
                    datalist：[{},{},{}]查询到的数据,
                    page：页码,
                    qty：每页显示多少条
                }
     */

    //连接数据库
    include 'connect.php';

    //获取page和qty
    $page = isset($_GET['page']) ? $_GET['page'] : '1';
    $qty = isset($_GET['qty']) ? $_GET['qty'] : '5';

    //计算截取起始索引值
    $index = ($page - 1) * $qty;

    //查询datalist
    $sql = "SELECT * FROM list LIMIT $index,$qty";
    $res = $conn->query($sql);
    $data = $res->fetch_all(MYSQL_ASSOC);//获取内容

    //查询商品列表，获取数据总条数
    $res2 = $conn->query("SELECT * FROM list");
    $row = $res2->num_rows;//获取结果集里的条数

    $goodlist = array(
        'total'=>$row,//总条数
        'datalist'=>$data,//查询到的数据
        'page'=>$page,//页码
        'qty'=>$qty//每页显示条数
    );

    echo json_encode($goodlist,JSON_UNESCAPED_UNICODE);

    $res->close();
    $conn->close();//断开连接

?>