// 放大镜插件
jQuery(function(){
    (function() {
//      var picimg = $(".imgpart .pic img");
//      var objimg = $(".imgpart .bigpic img");
        $('#details_left').on('click', 'li', function() {
            var ulobj = $(".imglist ul");
            var picimg = $(".imgpart .pic img");
            var objimg = $(".imgpart .bigpic img");
            var pic = $(".imgpart .pic");
            var magnify = $(".imgpart .pic .magnify");
            var bigpic = $(".imgpart .bigpic");
            var objimg = $(".imgpart .bigpic img");
            var imgsrc = $(this).children("img").attr("src");
            $(this).addClass("active").siblings().removeClass("active");
            var picimg = $(".imgpart .pic img");
            var objimg = $(".imgpart .bigpic img");
            picimg.attr("src", imgsrc);
            objimg.attr("src", imgsrc)
        });
//      var pic = $(".imgpart .pic");
//      var magnify = $(".imgpart .pic .magnify");
//      var bigpic = $(".imgpart .bigpic");
//      var objimg = $(".imgpart .bigpic img");
        $('#details_left').on('mousemove','.pic',function(e) {
            var ulobj = $(".imglist ul");
            var picimg = $(".imgpart .pic img");
            var objimg = $(".imgpart .bigpic img");
            var pic = $(".imgpart .pic");
            var magnify = $(".imgpart .pic .magnify");
            var bigpic = $(".imgpart .bigpic");
            var objimg = $(".imgpart .bigpic img");
            magnify.show();
            bigpic.show();
            var pagex = e.pageX;
            var pagey = e.pageY;
            var pictop = pic.offset().top;
            var picleft = pic.offset().left;
            var magnifyw = magnify.width();
            var magnifyh = magnify.height();
            var magnifytop = pagey - pictop - magnifyh / 2;
            var magnifyleft = pagex - picleft - magnifyw / 2;
            var picw = pic.width() - magnifyw;
            var pich = pic.height() - magnifyh;
            magnifytop = magnifytop < 0 ? 0 : magnifytop;
            magnifyleft = magnifyleft < 0 ? 0 : magnifyleft;
            magnifytop = magnifytop > pich ? pich : magnifytop;
            magnifyleft = magnifyleft > picw ? picw : magnifyleft;
            magnify.css({ top: magnifytop, left: magnifyleft });
            var minl = bigpic.width() - objimg.width();
            var mint = bigpic.height() - objimg.height();
            var objimgl = -magnifyleft * 2;
            var objimgt = -magnifytop * 2;
            objimgl = objimgl < minl ? minl : objimgl;
            objimgt = objimgt < mint ? mint : objimgt;
            objimg.css({ top: objimgt, left: objimgl })
        });
        $('#details_left').on('mouseleave','.pic',function() {
            var ulobj = $(".imglist ul");
            var picimg = $(".imgpart .pic img");
            var objimg = $(".imgpart .bigpic img");
            var pic = $(".imgpart .pic");
            var magnify = $(".imgpart .pic .magnify");
            var bigpic = $(".imgpart .bigpic");
            var objimg = $(".imgpart .bigpic img");
            magnify.hide();
            bigpic.hide()
        })
    })()
    // 页面渲染
    var date = decodeURI(location.search);
    var str = date.slice(1);
    var gid = str.split('=')[1];
    // console.log(gid)
    var url = '../api/idSelectGoodlist.php';
    var data = `gid=${gid}&time = ${new Date()}`;
    ajax("GET",url,data,function(str){
        var arr = JSON.parse(str);
        // console.log(arr);
        var res = arr.list.map(function(item){
            return `
                    <div class="imgdet wrap" data-id="../${item.gid}">
                        <div class="imgpart">
                            <div class="pic">
                                <img src="../${item.img1}" alt="">
                                <div class="magnify"></div>
                            </div>
                            <div class="bigpic">
                                <img src="../${item.img1}" alt="">
                            </div>
                        </div>
                        <div class="imglist">
                            <span class="prev"><</span>
                            <ul>
                                <li class="active">
                                    <img src="../${item.img1}" alt="">
                                </li>
                                <li>
                                    <img src="../${item.img2}" alt="">
                                </li>
                                <li>
                                    <img src="../${item.img3}" alt="">
                                </li>
                                <li>
                                    <img src="../${item.img4}" alt="">
                                </li>
                            </ul>
                            <span class="next">></span>
                        </div>
                    </div>`;

        }).join('');
        $('#details_left').html(res);
        var res2 = arr.list.map(function(item){
            return `
                <h1 data-id="${item.gid}">
                    <i class="df"></i>${item.name}
                </h1>
                <div>
                    （当日订单隔日发货/节假日均不发货）
                </div> `
        }).join('');
        $('.details_right .detail_r_t').html(res2);
        $('#jianyiPrice').html('￥'+arr.list[0].price);
    });    
    //加减数量
    $('.c02').click(function(){
        var num = $('#goodscount').val();
        num++;
        $('#goodscount').val(num);
    });
    $('.c01').click(function(){
        var num = $('#goodscount').val();
        num--;
        if(num<1){
            num=1;
        }
        $('#goodscount').val(num);
    });
    //回到顶部
    ScrollToTOP('ad_top',2);
    //跳转到购物车
    $('#tiaocar').click(function(){
        window.open('shopcar.html');
    });
    // 获取购物车的条数
    function strip(){
        var url = '../api/order.php';
        ajax('GET',url,'',function(str){
            var arr = JSON.parse(str);
            $('.cartcount span').html(arr.length);
        });
    }
    strip();
    // 加入购物车
    $('#addShopCart').click(function(){
    var num = $('#goodscount').val();
    console.log(gid);
         
        $.ajax({
            type:'GET',
            url:'../api/jion-car.php',
            data:{
                'gid':gid,
                'num':num
            },
            success:function(str){
                console.log(str);
            
                window.open('shopcar.html');
            }
        });
    });
})