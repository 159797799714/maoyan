<template>
    <div class="meituan" id="meituan">
        <input type="text" class="username" placeholder="账户名/手机号/Email">
        <input type="text" class="password" placeholder="请输入您的密码"> 
        <button class="login">登录</button>
        <h3>
            <span class="login_btn">立即注册</span>
            <span class="back_btn">找回密码</span>
        </h3>
        <h4>© 猫眼电影 客服电话：400-670-5335</h4>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#meituan{
    box-sizing:border-box;
    padding:0px 10px;
    .username,.password{
        margin-top:5px;
        width:100%;
        box-sizing:border-box;
        height:40px;
        border:0px;
        border-bottom:1px solid #c5c5c5;
     }
     .login{
         width:100%;
         background:#f03d37;
         height:44px;
         margin:15px 0px;
         text-align:center;
         border:0;
         font-size:18px;
         color:#fff;
         font-weight:500;
     }
     .login_btn,.back_btn{
         font-size:14px;
         font-weight:400;
         color:#f03d37;
     }
     .login_btn{
         float: left;
     }
     .back_btn{
         float: right;
     }
     h4{
         float: left;
         text-align: center;
         font-weight: 400;
         font-size:12px;
         margin-top:30px;
     }

}


</style>
