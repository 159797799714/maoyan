<template>
    <div class="phone" id="phone">
        <ul class="form">
            <li>
                <input type="text" placeholder="请输入手机号" class="phone_num">
                <a class="get_num">获取验证码</a>
            </li>
            <li>
                <input type="text" placeholder="请输入短信验证码" class="number">
            </li>
            <button class="login">登录</button>
        </ul>
            <h3>
                <span class="login_btn">立即注册</span>
                <span class="back_btn">找回密码</span>
            </h3>
            <h4>© 猫眼电影 客服电话：400-670-5335</h4>
        
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
*{
    box-sizing: border-box;
}
.form {
    padding:0px 10px;
    margin-top: 5px;
  li {
    padding-top:5px;
    height: 44px;
    border-bottom: 1px solid #ccc;
    position: relative;
    .get_num{
        display:inline-block;
        height:30px;
        width:110px;
        text-align: center;
        background:#dcdcdc;
        color:gray;
        position:absolute;
        right:0px;
        top:5px;
        line-height:30px;
        font-size:13px;
    }
    .phone_num{
      border:0;
      height:34px;
      width:100%;
      line-height: 44px;
    }
    .number{
      width:100%;
      border:0;
      height:34px;
      line-height: 44px;
      background:#dcdcdc;
      border-radius: 3px;
    }
  }
  
  .login {
      width: 100%;
      background: #dcdcdc;
      height: 44px;
      margin: 15px 0px;
      text-align: center;
      border: 0;
      font-size: 18px;
      color: gray;
      font-weight: 500;
    }
}
    .login_btn,
    .back_btn {
      font-size: 14px;
      font-weight: 400;
      color: #f03d37;
    }
    .login_btn {
      float: left;
    }
    .back_btn {
      float: right;
    }h3{
        padding:0px 10px;
    }
    h4{
         float: left;
         text-align: center;
         font-weight: 400;
         font-size:12px;
         margin-top:30px;
     }
</style>
