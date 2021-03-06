<?php
    /*
        查询商品列表进行排序分页
            get:
                desc：默认为升序，传desc为降序，
                gid：默认为id，需要进行排序的字段，
                page：默认为1，需要渲染的页码,
                qty：默认为10，每页显示多少条
            返回：
                {
                    total：总条数,
                    datalist：[{},{},{}]查询到的数据,
                    gid：进行排序的字段,
                    page：页码,
                    qty：每页显示多少条
                }
     */
    //连接数据库
    include 'connect.php';

    $desc=isset($_GET['desc']) ? $_GET['desc'] : 'desc';
    $gid=isset($_GET['gid']) ? $_GET['gid'] : 'id';
    $page = isset($_GET['page']) ? $_GET['page'] : '1';
    $qty = isset($_GET['qty']) ? $_GET['qty'] : '8';
    //计算截取起始索引值
    $index = ($page - 1) * $qty;

    //分页查询并排序
    $sql="SELECT * FROM list ORDER BY $gid $desc LIMIT $index,$qty";

    $res=$conn->query($sql);

    $data=$res->fetch_all(MYSQLI_ASSOC);
    // var_dump($res);
    //查询商品列表，获取数据总条数
    $res2 = $conn->query("SELECT * FROM list");
    $row = $res2->num_rows;//获取结果集里的条数

    $sort=array(
        'total'=>$row,//总条数
        'datalist'=>$data,//查询到的数据
        'gid'=>$gid,//进行排序的字段
        'page'=>$page,//页码
        'qty'=>$qty//每页显示条数
    );

    echo json_encode($sort,JSON_UNESCAPED_UNICODE);
?>