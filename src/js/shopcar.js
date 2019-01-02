jQuery(function(){
    /*
     需求：
        * 加数量
        * 减数量
        * 删除当行
        * 小计
        * 全选
        * 总数量和总价跟着变
    
    */
   var cart = document.querySelector('#tr135149-0');
    var arr = [];
    function car(){
        var url = '../api/order.php';
        ajax('GET',url,'',function(str){
            var arr = JSON.parse(str);
            // console.log(arr);
            var res = arr.map(function(item){
                return `
                        <tr>
                            <td colspan="8" class="shopcart_yhwrap">
                                <div class="yhnews">
                                    <span>包裹</span>
                                </div>
                            </td>
                        </tr>
                        <tr class="bgcolxz" data-id="${item.gid}">
                            <td width="40%">
                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                    <tbody>
                                        <tr>
                                            <td style="text-align: left; border: none;">
                                                <input type="checkbox" value="135149-0" name="checkGoods" checked="checked" class="checkGoods">
                                                <input type="hidden" id="jf135149" value="0">
                                            </td>
                                            <td style="text-align: left; border: none;">
                                                <div class="process-01">
                                                    <a target="_blank" href="https://www.j1.com/product/121918-135149.html">
                                                        <img style="width: 88px; height: 88px;" src="../${item.img1}">
                                                    </a>
                                                </div>
                                            </td>
                                            <td style="text-align: left; border: none;">
                                                <div class="process-02">
                                                    <a target="_blank" href="https://www.j1.com/product/121918-135149.html">
                                                        ${item.name}   
                                                    </a>
                                                    <a href="#" class="orange" style="font-weight: bold;"> </a>
                                                    <input type="hidden" id="sku135149-0" value="0">
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td width="8%">06-04203</td>
                            <td width="8%">${item.articleNo}</td>
                            <td width="10%">${item.spec}</td>
                            <td width="8%">
                                <span style="color:#c40000;font-size:14px;" id="jyj135149-0">${item.price}</span>
                            </td>
                            <td width="10%">
                                <div class="process-num clearfix">
                                    <div class="process-num_01">
                                        <a class="shopcart-btn cutnum" style="text-decoration: none;">-</a>
                                    </div>
                                    <input style="width: 30px" name="orderAmount" id="orderAmount135149-0" min-amount="1" max-amount="100" promote-amount="0.00" type="text" class="process-num_02" value="${item.num}">
                                    <div class="process-num_01">
                                        <a class="shopcart-btn addnum" style="text-decoration: none;">+</a>
                                    </div>
                                </div>
                            </td>
                            <td width="8%">
                                <span id="sum135149-0" class="sum">${item.price*item.num}</span>
                            </td>
                            <td> &nbsp; <a href="#" class="good_del">删除</a></td>
                        </tr>`;
            }).join('');
            cart.innerHTML = res;
           updateNum(); 
        });
    }
    car();
    // 数量加
    $('#tr135149-0').on('click', '.addnum', function() {
        //点击获取对应行的数量，加1在赋值
        var val = $(this).parent().prev().val();
        var id = $(this).parent().parent().parent().parent().attr('data-id');
        // console.log(id);
             
        val++;
        if (val >= 100) { //库存量
            val = 100;
        }
        $(this).parent().prev().val(val);
        //接口：更新数据库数量
        var url = '../api/num.php';
        var data = `gid=${id}&num=${val}`;
        ajax('GET',url,data,function(str){
            // console.log(str);
        });
        subTotal($(this)); //刷新合计
        // total();
    });
        //数量减
    $('#tr135149-0').on('click', '.cutnum', function() {
        //点击获取对应行的数量，加1在赋值
        var val = $(this).parent().next().val();
        var id = $(this).parent().parent().parent().parent().attr('data-id');
        val--;
        if (val <= 1) { //库存量
            val = 1;
        }
        //接口：更新数据库数量
        $(this).parent().next().val(val);
        var url = '../api/num.php';
        var data = `gid=${id}&num=${val}`;
        ajax('GET',url,data,function(str){
            // console.log(str);
        });
        subTotal($(this)); //刷新合计
    });
    function subTotal(now) { //合计
        var num = now.parent().parent().find('input').val(); //数量
        var price = now.parent().parent().parent().prev().children().text();
        price = $.trim(price); //工具方法：去除前后空格
        var all = (num * price); //保留两个小数，小计：数量*单价
        now.parent().parent().parent().next().children().html(all);
        updateNum();
    }
    //删除当行
   $('#tr135149-0').on('click', '.good_del', function() {
        var mes = confirm('您确定要删除该行吗？');
        if (mes) {
            $(this).parent().parent().prev().remove();
            $(this).parent().parent().remove();
            var gid = $(this).parent().parent().attr('data-id');
            console.log(gid);
                 
            $.ajax({
                type:"get",
                url:"../api/del.php",//接口路径
                async:true,//异步
                data:{//传输数据
                     'gid':gid
             },
             success:function(str){//成功回调
                 // console.log(str);
             }
         });
            
        }
        update(); //最后一行是否显示判断
        updateNum();
    });
    //更新状态
    function update() {
        if ($('.addnum').size() == 0) {
            //意味着没有商品数据了
            $('.settlement').css('display', 'none');
            $('#shopcart-con').css('display', 'none');
            $('#none').css('display', 'block');
        }
    }
    //全选
    var isok = false;
    $('#checkAll').on('click', function() {
        if (isok) {
            //全选 attr()只能帮到普通属性  id class title ;prop()添加有行为的属性：一般用在单选和复选框
            $(this).prop('checked', 'checked');
            $('.checkGoods').prop('checked', 'checked');
            updateNum();
        } else {
            //不选
            $(this).removeAttr('checked');
            $('.checkGoods').removeAttr('checked');
            $('.shopcart-tuijian-price02').html(0);
            $('#sumAmount').html(0);
            $('.pr20 i').html(0);
        }
        isok = !isok;
    });
    // 复选框被勾选
    $('#tr135149-0').on('click','.bgcolxz tbody td .checkGoods',function(){
        updateNum();
        if(arr.length==$('.bgcolxz tbody td')){
            $('#checkAll').prop('checked','checked');
            isok=false;
        }else{
            $('#checkAll').removeAttr('checked');
            isok=true;
        }
    })


    //总数量和总价格改变：封装成函数
    function updateNum(){
        // 空数组，被勾选行的下标
        arr.length = 0;
        var le = $('#tr135149-0 .bgcolxz tbody td .checkGoods').size();//复选框的总个数
            // console.log(le);
        for(var i = 0; i < le; i++) {
            if($('.checkGoods').eq(i).prop('checked')) {
                //意味着这一行被勾选
                arr.push(i);
            }
        }
        //统计被勾选的行对应的数量，累加放到底部对应位置
        //统计被勾选的行对应的小计，累加放到底部对应位置
        var num = 0; //总数量
        var totalPrice = 0; //存总价
        for(var i = 0; i < arr.length; i++) {
            num += $('.process-num_02').eq(arr[i]).val() * 1;
            var price = $('.sum').eq(arr[i]).text();
            // console.log(price);
                 
            price = $.trim(price); //去掉前后空格
            // console.log(price);
                 
            // price = (price.substring(2) * 1); //199.98
                     // console.log(price);
            totalPrice += price*1;
        }
        // console.log(num);
        $('#sumAmount').html('已选 ' + num + ' 件商品');

             // console.log(totalPrice.toFixed(2));
        $('.shopcart-tuijian-price02').html(totalPrice);
    }
    //全删
    $('#Alldel').on('click', function() {
        updateNum();
        var mes = confirm('您确定要删除多行吗？');
        if(mes) {
            for(var i = arr.length - 1; i >= 0; i--) { //找到对应的行，删除
                $('.checkGoods').eq(arr[i]).parent().parent().parent().parent().parent().parent().parent().remove();
                var gid = $('#tr135149-0');
                console.log(gid);
                //接口3：删除数据库订单表多条数据
                // $.ajax({
                //         type:"get",
                //         url:"../api/del.php",//接口路径
                //         async:true,//异步
                //         data:{//传输数据
                //              'gid':gid
                //      },
                //      success:function(str){//成功回调
                //          // console.log(str);
                //      }
                //  });
            }
        }
     // console.log(arr); //0 1 2
        updateNum();
        update();
    });
})