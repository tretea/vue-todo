<template>
  <div id="box">
    <header id="header">
      <div id="intro">
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
              <router-link to="/register"><button id="btnregister"><i class="fas fa-play">注册</i></button></router-link>
              <router-link to="/login"><button id="btnlogin"><strong>登陆</strong></button></router-link>
          </div>
      </div>
    </header>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: "index",
    data:function(){
      return{

      }
    }
  }
</script>

<style scoped>
  #box{
    background-image: url('../../image/首页背景.jpg');
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-repeat:no-repeat;
    background-size:100% 100%;
    z-index: 0;
  }
  #header{
      position: fixed;
      top:0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color:rgba(0,0,0,0.6);
  }
  #intro{
    width: 900px;
    margin: 0 auto;
    margin-top: 200px;
    color: white;
  }
  .text-first{
    font-size: 35px;
  }
  .text-second{
    font-size: 20px;
  }
  #btnlogin{
    outline: none;
    background: none;
    border: 2px solid white;
    color: white;
    width: 80px;
    height: 40px;
    cursor:pointer;
    margin-left: 10px;
  }
  #btnregister{
    outline: none;
    background: none;
    border: 2px solid white;
    color: white;
    width: 80px;
    height: 40px;
    cursor:pointer;
  }
  #btnlogin:hover{
    box-shadow: 2px 2px 9px black;
  }
  #btnregister:hover{
    box-shadow: 2px 2px 9px black;
  }
</style>