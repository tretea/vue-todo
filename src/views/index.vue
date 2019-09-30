<template>
    <div id="box">
    <header>
<!--        &lt;!&ndash; 导航&ndash;&gt;-->
<!--        <nav class="navbar">-->
<!--            <div class="container">-->
<!--                <div class="navbar-header">-->
<!--                    <font class="navbar-brand">回忆里的失忆者</font>-->
<!--                </div>-->
<!--                <div class="nav-list">-->
<!--                    <ul class="nav-list-content">-->
<!--                        <li class="l-first">-->
<!--                            <a href="#"><i class="fas fa-home">首页</i></a>-->
<!--                        </li>-->
<!--                        <li class="l-second">-->
<!--                            <a href="/register"><i class="fas fa-user-edit">注册</i></a>-->
<!--                        </li>-->
<!--                        <li class="l-third">-->
<!--                            <a href="/login"><i class="fas fa-user-cog">登录</i></a>-->
<!--                        </li>-->
<!--                    </ul>-->
<!--                </div>-->
<!--            </div>-->
<!--        </nav>-->
<!--        &lt;!&ndash; 内容&ndash;&gt;-->
<!--        <div id="intro">-->
<!--            <div class="text-first" style="text-transform: none">-->
<!--                回忆里的失忆者-->
<!--            </div>-->
<!--            <div class="text-second" style="text-transform:none">-->
<!--                「留下一段美好的回忆」-->
<!--            </div><br>-->
<!--            <div class="text-second" style="text-transform:none">-->
<!--                「下一刻你我皆是过客」-->
<!--            </div><br>-->
<!--            <div class="register">-->
<!--                <router-link to="/register"><button id="btnregister"><i class="fas fa-play">注册</i></button></router-link>-->
<!--                <router-link to="/login"><button id="btnlogin"><strong>登陆</strong></button></router-link>-->
<!--            </div>-->
<!--        </div>-->
    </header>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: "index",
        data:{

        }
    }
</script>

<style scoped>
    #box{
        background-image: url("../.././image/首页背景.jpg");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width:100%;
        height:720px;
        box-shadow: 5px 5px 1080px black inset;
    }
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
        /*margin: 0 auto;*/
        margin-top: 200px;
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
        border: 2px solid black;
        color: black;
        width: 80px;
        height: 40px;
        cursor:pointer;
        margin-left: 10px;
    }
    #btnregister{
        outline: none;
        background: none;
        border: 2px solid black;
        color: black;
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