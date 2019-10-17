<template>
  <div id="box">
      <div class="allinfo">
          <div class="nav">
              <div class="logo">
                  <img src="../.././image/logo.png" alt="">
              </div>
              <div class="navli">
                  <ul>
                      <li>高级版</li>
                      <li>帮助</li>
                      <li>应用程序</li>
                      <li><router-link to="/login" style="text-decoration: none;color: black;">登录</router-link></li>
                      <li id="registerli"><router-link to="/register" style="text-decoration: none;color: white;">免费注册</router-link></li>
                  </ul>
              </div>
          </div>
          <div class="font" id="topone">
              <h1>完成了不起的工作</h1>
          </div>
          <div class="font" id="topsecond">
              <h2 style="font-weight: lighter">simple帮助你保持专注，完成更多工作</h2>
          </div>
          <div class="topbtn">
              <button id="registerbtn">免费注册</button>
              <button id="downloadbtn">下载simple应用</button>
          </div>
      </div>
      <div class="content">
          <div class="font" style="color: white;">
              <h1 style="position: relative;top: 50px;">完整的工作流效率工具</h1>
              <h3 style="font-weight: lighter;position: relative;top: 70px;">从收集想法、规划任务 到 专注工作、归纳分析，simple提供了完整的工作流效率管理。</h3>
              <div style="margin:0 auto;position: relative;top: 150px;" class="itemimg">
                  <img src="../.././image/item4.png" alt="" width="585px" style="left:70px;">
                  <img src="../.././image/item2.png" alt="" width="142px" style="right:50px;z-index: 1">
                  <img src="../.././image/item3.png" alt="" width="410px" style="right:120px;">
              </div>
          </div>
      </div>
      <div class="item">
          <div style="display:flex;justify-content: space-between;width: 980px;margin:0 auto;position: relative;top: 200px ">
              <div>
                  <h1 style="margin-bottom:20px">效率 = 专注</h1>
                  <h3 style='line-height: 30px;font-weight:normal;'>
                      基于simple工作法，帮助你集中注意力。试过就知道 <br> 这是有效的时间管理方法。
                  </h3>
              </div>
              <div>
                  <img src="../.././image/item1.png" alt="" width="350px">
              </div>
          </div>
      </div>
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
  /*#box{*/
  /*    width: 100%;*/
  /*    position: relative;*/
  /*    top: -200px;*/
  /*    z-index: 0;*/
  /*}*/
  .allinfo{
      width: 100%;
      height: 480px;
      background-color:rgb(244,244,244);
  }
  .nav{
      width: 1100px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      top: 10px;
  }
  .logo{
      width: 136px;
      height: 80px;
      cursor: pointer;
  }
  .logo img{
      width: 100%;
      height: 100%;
  }
  .navli ul{
      display: flex;
      align-items: center;
      list-style: none;
  }
  .navli li{
      padding: 12px 20px;
      font-size: 13px;
      cursor: pointer;
  }
  #registerli{
      border-radius: 50px;
      background-color: rgb(241,96,77);
      color: white;
      font-size: 18px;
      padding: 8px 15px;
      border: 2px solid red;
  }
  #topone{
      margin-top:100px;
  }
  #topsecond{
      padding: 20px 0;
  }
  .font{
      text-align: center;
      font-size: 20px;
  }
  .topbtn button{
      border-radius: 50px;
      outline: none;
      background: none;
      border: 1px solid gray;
      cursor: pointer;
      padding: 8px 15px;
      font-size: 18px;
      margin: 5px;
  }
  .topbtn{
      width: 310px;
      margin:28px auto;
  }
  #registerbtn{
      background-color: rgb(241,96,77);
      color: white;
      font-size: 18px;
      padding: 8px 15px;
      border: 2px solid red;
  }
  #downloadbtn{
      color: rgb(102,102,102);
      font-size: 18px;
      padding: 8px 15px;
      border: 2px solid rgb(102,102,102);
  }
  .content{
      background-color: rgb(241,96,77);
      width: 100%;
      height: 400px;
  }
  .item{
      background-color: rgb(244,244,244);
      width: 100%;
      height: 400px;
  }
  .itemimg img{
      position: relative;
  }
</style>