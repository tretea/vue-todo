<template>
  <div id="app">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-header">
          <font class="navbar-brand">回忆里的失忆者</font>
        </div>
        <div class="nav-list">
          <ul class="nav-list-content">
            <li class="l-first">
              <a href="/"><i class="fas fa-home">首页</i></a>
            </li>
            <li class="l-second">
              <a href="/register"><i class="fas fa-user-edit">注册</i></a>
            </li>
            <li class="l-third">
              <a href="/login"><i class="fas fa-user-cog">登录</i></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}


.navbar{
  width: 100%;
  float: left;
}
.container{
  display: flex;
  width: 900px;
  margin: 0 auto;
  justify-content: space-between;
}
.navbar-header{
  color: white;
  font-size: 25px;
}
.navber-brand{

}
.nav-list-content{
  display: flex;
}
.nav-list-content li{
  display: inline-block;
}
.nav-list-content li a{
  display: inline-block;
  color: white;
  text-decoration: none;
  padding: 2px;
  margin: 0 10px;
}
</style>
