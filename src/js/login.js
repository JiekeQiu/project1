jQuery(function(){
    $('#ptLogin').click(function(){
        var name = $('#user').val();
        name = $.trim(name);
        var paw = $('#password').val();
        paw = $.trim(paw);
        if(name && paw){
            var url = '../api/login.php';
            var data = `user=${name}&paw=${paw}&time=${new Date()}`;
            ajax('POST',url,data,function(str){
                console.log(str);
                if(str == 1){
                    
                    var now=new Date();
                    now.setDate(now.getDate()+7);
                    Cookie.set('user',name,{'expires':now,'path':'/project/src/'});
                    window.open('../index.html');
                }else{
                    alert('用户名或密码有误,请重新输入');
                    $('#user').val('');
                    $('#password').val('');
                }
            });
        }else{
            alert('有密码或用户名为空');
        }
    });
})