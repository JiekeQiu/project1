jQuery(function(){
    // 电话号码
    var tel = document.querySelector("#mobile");
    // 密码
    var pas = document.querySelector('.jsszmm');
    // 确认密码
    var okpas = document.querySelector('.jsqrmm');
    // 验证码
    var verify = document.querySelector('.code_val');
    var random = document.querySelector('.verify');
    // 勾选
    var readme = document.querySelector('#readme');
    // 点击注册
    var btn = document.querySelector(".btn-ljzc");
    // 开关
    var isok = false;
    var isok2 = false;
    var isok3 = false;
    var isok4 = false;
    var isok5 = false;
    //验证手机号码是否存在。不存在则注册成功。否则失败
        // ts-error:代表错误
        // bk-error : 加边框
        // correct ：对
    tel.onblur = function(){
        var val = tel.value.trim();
       if(val){
            if(checkReg.tel(val)){
                var url = '../api/telName.php';
                var data = `tel=${val}&time=${new Date()}`;
                ajax('GET',url,data,function(str){
                    if(str == '0'){
                        $('#mobile').next().next().removeClass('correct');
                        $('#mobile').addClass('bk-error');
                        $('#mobile').next().html('该用户名已注册');
                        $('#mobile').next().addClass('ts-error');
                    }else{
                        $('#mobile').next().html('');
                        $('#mobile').next().removeClass('ts-error');
                        $('#mobile').removeClass('bk-error'); 
                        $('#mobile').next().next().addClass('correct');
                        isok = true;
                    }
                })
            }else{
                $('#mobile').next().next().removeClass('correct');
                $('#mobile').addClass('bk-error');
                $('#mobile').next().html('请输入正确的号码格式');
                $('#mobile').next().addClass('ts-error'); 
            }
       }else{
        $('#mobile').next().next().removeClass('correct');
        $('#mobile').next().html('请输入11位的手机号');
        $('#mobile').addClass('bk-error');
        $('#mobile').next().addClass('ts-error');
       }
    }
    // 验证密码规则
    pas.onblur = function(){
        var val2 = pas.value.trim();
        if(val2){
            if(checkReg.psweasy(val2)){
                $('.jsszmm').next().html('');
                $('.jsszmm').next().removeClass('ts-error');
                $('.jsszmm').removeClass('bk-error'); 
                $('.jsszmm').next().next().addClass('correct');
                isok2 = true;
            }else{
                $('.jsszmm').next().next().removeClass('correct');
                $('.jsszmm').addClass('bk-error');
                $('.jsszmm').next().html('请输入正确的号码格式');
                $('.jsszmm').next().addClass('ts-error'); 
            }
        }else{
            $('.jsszmm').next().next().removeClass('correct');
            $('.jsszmm').next().html('密码不能为空');
            $('.jsszmm').addClass('bk-error');
            $('.jsszmm').next().addClass('ts-error');  
        }
    }
    // 确认密码
    okpas.onblur = function(){
        var val2 = pas.value.trim();
        var val3 = okpas.value.trim();
        if(val3){
            if(val2==val3){
                $('.jsqrmm').next().html('');
                $('.jsqrmm').next().removeClass('ts-error');
                $('.jsqrmm').removeClass('bk-error'); 
                $('.jsqrmm').next().next().addClass('correct');
                isok5 = true;
            }else{
                $('.jsqrmm').next().next().removeClass('correct');
                $('.jsqrmm').addClass('bk-error');
                $('.jsqrmm').next().html('密码不一致');
                $('.jsqrmm').next().addClass('ts-error'); 
            }
        }else{
            $('.jsqrmm').next().next().removeClass('correct');
            $('.jsqrmm').next().html('请确认密码');
            $('.jsqrmm').addClass('bk-error');
            $('.jsqrmm').next().addClass('ts-error'); 
        }
    }
    // 验证码
    var num = random.value;
    num = randomNum();
    random.innerHTML=num;
    verify.onblur = function(){
        var val4 = verify.value;
        if(val4==num){
            $('.code_val').next().next().next().addClass('correct');
            $('.code_val').next().next().text('');
            $('.code_val').next().next().removeClass('ts-error');
            $('.code_val').removeClass('bk-error');  
            isok3 = true;       
        }else{
            $('.code_val').next().next().next().removeClass('correct');
            $('.code_val').addClass('bk-error');
            $('.code_val').next().next().text('验证码错误');
            $('.code_val').next().next().addClass('ts-error');      
        }
    }
    // 判断是否勾选
    readme.onclick = function(){
        isok4 = !isok4;
    }
    // 点击注册
    btn.onclick = function(){
        if(!isok4){
            if(isok && isok2 && isok3 && isok5){
                var val = tel.value.trim();
                var val2 = pas.value.trim();
                var url = '../api/reg.php';
                var data = `tel=${val}&pas=${val2}&time=${new Date()}`;
                ajax("POST",url,data,function(str){
                    console.log(str);
                         
                    if(str=='yes'){
                        location.href='login.html';
                    }
                });
            }else{
                $('#readme').next().next().text('请填写完整');
                $('#readme').next().next().addClass('ts-error');
            }
        }else{
            $('#readme').next().next().text('请勾选用户协议');
            $('#readme').next().next().addClass('ts-error');
        }
    }
})
