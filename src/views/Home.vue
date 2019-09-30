<template>
  <div class="home">
    <header>
      <!-- 导航-->
      <nav class="navbar">
        <div class="container">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">回忆里的失忆者</a>
          </div>
          <div class="nav-list">
            <ul class="nav-list-content">
              <li class="l-first">
                <a href="#"><i class="fas fa-home">首页</i></a>
              </li>
              <li class="l-second">
                <a href="#"><i class="fas fa-user-edit">注册</i></a>
              </li>
              <li class="l-third">
                <a href="#"><i class="fas fa-user-cog">登录</i></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <!-- 内容-->
      <section id="intro">
        <div class="text-first" style="text-transform: none">
          回忆里的失忆者
        </div>
        <div class="text-second" style="text-transform:none">
          「留下一段美好的回忆」
        </div><br>
        <div class="text-second" style="text-transform:none">
          「下一刻你我皆是过客」
        </div><br>
        <div class="register">
          <button><a href="#"><i class="fas fa-play">注册</i></a></button>
          <button><a href="#"><strong>登陆</strong></a></button>
        </div>
      </section>
    </header>
  </div>
</template>

<script>

export default {
    data:{
            a:'',
    }
}
</script>
<style scoped>
  .navbar{

  }
  .container{
    display: flex;
    width: 900px;
    margin: 0 auto;
    justify-content: space-between;
  }
  .navbar-header{
    font-size: 25px;
  }
  .navber-brand{

  }
  .nav-list{

  }
  .nav-list-content{
    display: flex;
  }
  .nav-list-content li{
    display: inline-block;
  }
  .nav-list-content li a{
    display: inline-block;
    color: black;
    text-decoration: none;
    padding: 2px;
    margin: 0 10px;
  }
  #intro{
    width: 900px;
    margin: 0 auto;
    margin-top: 200px;
  }
  .text-first{
    font-size: 35px;
  }
  .text-second{
    font-size: 20px;
  }
  .button-first{

  }
</style>



