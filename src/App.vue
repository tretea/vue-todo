<template>
  <div id="app">
   <div class="nav">
     <div class="container">
       <div class="left"><router-link to="/"><h1>回忆里的失意者</h1></router-link></div>
       <div class="right">
           <ul>
               <li><router-link to="/"><i class="fas fa-home" >&nbsp;首页</i></router-link></li>
               <li><router-link to="/register"><i class="fas fa-user-edit">&nbsp;注册</i></router-link></li>
               <li><router-link to="/login"><i class="fas fa-user-cog">&nbsp;登录</i></router-link></li>
           </ul>
       </div>
     </div>
   </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.nav{
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
}
.container{
    width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}
.container .left{
    display: flex;
    align-items: center;
}
.container a{
    text-decoration: none;
    color: white;
}
.container ul{
    list-style-type: none;
    display: flex;
}
.container ul li{
    padding: 20px 20px;
}

</style>


<script>
    export default {
        name: "index",
        data:function(){
            return{

            }
        },
        methods:{

        }
    }
</script>