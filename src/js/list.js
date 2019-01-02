// 渲染页面
jQuery(function($){
    var page = document.querySelector('#qty');
    var prev = document.querySelector('.listPage .prev');
    var next = document.querySelector('.listPage .next');
    var row = 0; 
    var aSort= document.querySelectorAll('.list_r_b_l a');
    // console.log(aSort);
         
    // 封装
    function creat(arr){
        var res = arr.datalist.map(function(item){
                return `
                    <li data-id="${item.gid}">
                        <img src="../${item.img1}"/>
                        <a href="javascript:;">${item.name}</a><br />
                        <span>￥${item.price}</span>
                        <span>总销量 : 122</span>
                        <a href="javascript:;">0条评论</a>
                        <a href="javascript:;" class="car"><span></span>加入购物车</a>
                        <a href="javascript:;" class="xiangqing">查看详情</a>
                    </li>`;
        })
        $('#list_right .list').html(res);
    }
    var url = '../api/selectGoodlist.php';
    var data = `page=1&qty=8&time = ${new Date()}`;
    // 页面渲染
    ajax('GET',url,data,function(str){
        var arr = JSON.parse(str);
        // console.log(arr);
        creat(arr);  
        // ======渲染页码======
        var num = Math.ceil(arr.total/arr.qty);
        row = num;
        // console.log(arr.datalist);
        for(var i=0;i<num;i++){//遍历每个页码，渲染页面
            page.innerHTML +=`<em>${i+1}</em>`;
        } 
        page.children[0].className = 'qty_active';            
    })
    // 点击页码跳转相应的内容
        var now = 1;
        page.onclick = function(e){
            var e=e || event.window;
            if(e.target.tagName.toLowerCase()=='em'){
                now = e.target.innerText;
                var url = '../api/selectGoodlist.php';
                var data = `page=${now}&qty=8&time = ${new Date()}`;
                ajax("GET",url,data,function(str){
                    var arr = JSON.parse(str);
                    creat(arr); 
                })
                // 遍历每个页码
                for(var i=0;i<page.children.length;i++){
                    page.children[i].className = '';
                                 
                }
                page.children[now-1].className = 'qty_active';
            }
        }
    // 点击上一页跳转到相应的页面
        prev.onclick = function(){
            now --;//每点击一次就减一
            // 判断当页面小于1的时候上一页就不能再点击
            if(now<=1){
                now=1;
            } 
            var url = '../api/selectGoodlist.php';
            var data = `page=${now}&qty=8&time = ${new Date()}`;
            ajax('GET',url,data,function(str){
                var arr = JSON.parse(str);
                creat(arr);
            })
            for(var i=0;i<page.children.length;i++){
                page.children[i].className = '';
                     
            }
            page.children[now-1].className = 'qty_active';
            // 排序
            $('#price').click(function(){
            var gid = $(this).attr('id');
            sort(gid);
            $(this).addClass('sort_active');
    })
        }
    // 点击下一页跳转到相应的页面
        next.onclick = function(){
            now ++;
            if(now>=row){
                now=row;
            }
            var url = '../api/selectGoodlist.php';
            var data = `page=${now}&qty=8&time = ${new Date()}`;
            ajax('GET',url,data,function(str){
                var arr = JSON.parse(str);
                creat(arr);
            })
            for(var i=0;i<page.children.length;i++){
                page.children[i].className = '';
                     
            }
            page.children[now-1].className = 'qty_active';
            // 排序
            $('#price').click(function(){
            var gid = $(this).attr('id');
            sort(gid);
            $(this).addClass('sort_active');
    })
        }
    // =========排序功能==========
    function sort(gid){
        for(var i=0; i<aSort.length;i++){
            $('.list_r_b_l a').eq(i).removeClass('sort_active');
        }
        var url = '../api/sortGoodlist.php';
        var data = `page=1&qty=8&gid=${gid}&desc=desc&time = ${new Date()}`;
        ajax('GET',url,data,function(str){
            var arr = JSON.parse(str);
            creat(arr);
        })
    }         
    $('#price').click(function(){
        var gid = $(this).attr('id');
        sort(gid);
        $(this).addClass('sort_active');
    })

    ScrollToTOP('ad_top',2);
    $('#login').click(function(){
        window.open('login.html');
    });
    $('#reg').click(function(){
        window.open('reg.html');
    });
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
    
    // 跳转到详情页
    $('.list').on('click','.xiangqing',function(){
        var oid = $(this).parent().attr('data-id');
        window.open('detail.html?id='+oid);
    })
// 加入购物车
     $('.list').on('click','.car',function(){
        var gid = $(this).parent().attr('data-id');
        var url = '../api/jion-car.php';
        var data = `gid=${gid}&num=1&time = ${new Date()}`;
        ajax('GET',url,data,function(str){
            console.log(str);
            strip();
        });
    })

})