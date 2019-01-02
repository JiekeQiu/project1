jQuery(function(){
            $('.banner_img').carousel({
                el : {
                    imgsContainer   : '.carousel', // 图片容器
                    prevBtn         : '.carousel-prev', // 上翻按钮
                    nextBtn         : '.carousel-next', // 下翻按钮
                    indexContainer  : '.carousel-index', // 下标容器
                },conf : {
                    auto            : true, //是否自动播放 true/false 默认:true
                    needIndexNum    : true, //是否需要下标数字 true/false 默认:true
                    animateTiming   : 1000, //动画时长(毫秒) 默认:1000
                    autoTiming      : 3000, //自动播放间隔时间(毫秒) 默认:3000
                    direction       : 'right', //自动播放方向 left/right 默认:right
                }
            });

            /*以下代码按照需要添加/修改*/
            $(".carousel-prev").hover(function(){
                $(this).find("img").attr("src","images/icons/left_btn2.png");
            },function(){
                $(this).find("img").attr("src","images/icons/left_btn1.png");
            });
            $(".carousel-next").hover(function(){
                $(this).find("img").attr("src","images/icons/right_btn2.png");
            },function(){
                $(this).find("img").attr("src","images/icons/right_btn1.png");
            });
        });
// tab切换
jQuery(function($){
    TabControl('banner_r_top','banner_active',2);
        function banner_b_hot(){
            var oBox=document.querySelector('.banner_bottom .banner_b_hot div ul');
            var aLi=oBox.querySelectorAll('li');
            var aDivs=oBox.querySelectorAll('div');
                //循环绑定事件
            for(var i=0;i<aLi.length;i++){
                aLi[i].index=i;//添加索引，做一个标识，点击的时候就可以知道我点的是第几个了
                //第二种:滑过
                aLi[i].onmousemove=function(){
                //排他:清空
                for(var i=0;i<aLi.length;i++){
                    aLi[i].className='';
                    aDivs[i].style.display='none';
                }
                    this.className='banner_b_hot_active';
                    aDivs[this.index].style.display='block';
                }
            }
        }
        banner_b_hot();
        function floor_c(id,id2,active){
            var aLi=document.querySelectorAll(id);
            var aDivs=document.querySelectorAll(id2);
                //循环绑定事件
            for(var i=0;i<aLi.length;i++){
                aLi[i].index=i;//添加索引，做一个标识，点击的时候就可以知道我点的是第几个了
                //第二种:滑过
                aLi[i].onmousemove=function(){
                //排他:清空
                for(var i=0;i<aLi.length;i++){
                    aLi[i].className='';
                    aDivs[i].style.display='none';
                }
                    this.className=active;
                    aDivs[this.index].style.display='block';
                }
            }
        }
        floor_c('.floor_1_top ul li','.floor_1_c','floor_active');
        floor_c('.floor_2_top ul li','.floor_2_c','floor_2_active');
// 回到顶部
    ScrollToTOP('ad_top',2);
})
// 登录成功
jQuery(function(){
    var login = document.querySelector('#login');
    // var name = Cookie.get('user');
    // console.log(name);
      
    function update(){
        var name = Cookie.get('user');
        // console.log(name);
        if(name){
            login.innerHTML='欢迎&nbsp;'+'<a style="cursor:pointer;">'+name+'</a>'+'&nbsp;来到我的首页'+'<a style="cursor:pointer;color:blue;" id="exit" >退出</a>';
        }else{
            login.innerHTML='您好&nbsp;,&nbsp;&nbsp;欢迎来到建一网网上药店！&nbsp;[<a href="javascript:;" id="exit">登录</a>]';
        }
    }
    update();
    // 退出登录
    var exit = document.querySelector('#exit');
    exit.onclick = function(){
        Cookie.remove('user','/project/src/');
        update();
    }
    $('#login').click(function(){
        window.open('html/login.html');
    })
    $('#reg').click(function(){
        window.open('html/reg.html');
    })
    //跳转到购物车
    $('#tiaocar').click(function(){
        window.open('html/shopcar.html');
    });
    // 获取购物车的条数
    function strip(){
        var url = 'api/order.php';
        ajax('GET',url,'',function(str){
            var arr = JSON.parse(str);
            $('.cartcount span').html(arr.length);
        });
    }
    strip();
})