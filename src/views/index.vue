<template>
    <div id="box">
        <div class="nav">
            <div class="img">
                <img :src="imgsrc" alt="">
            </div>
            <div id="select">
                <div id='selecttop'></div>
                <div id="selectuser">
                    <ul v-if="this.name!=undefined">
                        <li>更换头像</li>
                        <li  v-on:click="loginout">退出登陆</li>
                    </ul>
                    <ul v-else>
                        <li><router-link to="/login" style="cursor:pointer;text-decoration: none;color: black;">登录</router-link></li>
                        <li><router-link to="/register" style="cursor:pointer;text-decoration: none;color: black;">注册</router-link></li>
                    </ul>
                </div>
            </div>

            &emsp;&nbsp;
            <div v-if="name==undefined">
                <font><router-link to="/login" style="cursor:pointer;text-decoration: none;color: black;">登录</router-link></font>
                &nbsp;|&nbsp;
                <font><router-link to="/register" style="cursor:pointer;text-decoration: none;color: black;">注册</router-link></font>
            </div>
            <div v-else>
                <font>{{name}}</font>
            </div>
        </div>
        <div class="content">
            <div class="list">
                <div class="todolist">
                    &emsp;<font class="iconfont icon-weizhihang">&nbsp;未执行</font>
                    <div style="height: 49%;overflow: auto;overflow-x: hidden;">
                            <ul>
                                <li class='trueli' v-on:click="itemclick" v-for="(item,index) in flaseitem" v-bind:ind="index" v-bind:bool=0><div class='changeitem' v-on:click="changebool" v-bind:ind="index" v-bind:bool=0></div>{{item}} <div v-on:click="del" v-bind:ind="index" v-bind:bool=0 class="delitem">x</div></li>
                            </ul>
                    </div>
                    &emsp;<font class="iconfont icon-task-complete">&nbsp;已执行</font>
                    <div style="height: 43%;overflow: auto;overflow-x: hidden;">

                            <ul>
                                <li v-for="(item,index) in trueitem" v-bind:ind="index" v-bind:bool=1><div class='changeitem ' v-on:click="changebool" v-bind:ind="index" v-bind:bool=1>√</div><div class="truefont">{{item}}</div> <div v-on:click="del" v-bind:ind="index" v-bind:bool=1 class="delitem">x</div></li>
                            </ul>
                    </div>
                </div>
            </div>
            <div class="item">
                <div id="msgbox">
                    <div class="msgs">
                        <h1>0</h1>
                        <font>预计时间(h)</font>
                    </div>
                    <div class="msgs">
                        <h1>{{flaseitem.length}}</h1>
                        <font>待完成任务</font>
                    </div>
                    <div class="msgs">
                        <h1>{{alltime}}</h1>
                        <font>已用时间(分)</font>
                    </div>
                    <div class="msgs">
                        <h1>{{trueitem.length}}</h1>
                        <font>已完成任务</font>
                    </div>
                </div>
                <div class="input">
                    <input type="text" placeholder="请输入一个任务,按回车键或点击提交保存" v-model="item" v-on:keyup.13='creates'><button v-on:click="creates">提交</button>
                </div>
                <div class="todoitem">
                    <div id="timeli">
                        <div v-if="timeitem!=''" class='changeitem' v-on:click="changebool"  v-bind:ind=timeindex v-bind:bool=timebool></div>
                        <div v-else class='changeitem'></div>
                        <i id="itemtime" v-on:click="timeclick" style='font-size: 28px;cursor:pointer' class="iconfont icon-bofang"></i>&emsp;{{timeitem}}
                    </div>
                    <div id="time">
                        <font class="hour">{{h}}</font>
                        <font>:</font>
                        <font class="minute">{{m}}</font>
                        <font>:</font>
                        <font class="seconds">{{s}}</font><br>
                        <i class="iconfont icon-bofang" id='start' style="font-size: 50px;color:orange;cursor: pointer;" v-on:click="timeclick"></i>
                        <i class="iconfont icon-stopiconcopy" style="cursor: pointer;font-size: 50px;color:orange;margin-left: 10px;" @click="stopclick"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data:function(){
            return{
                timefunction:'',
                name:this.$route.params.name,
                item:'',   //待办项
                todoitem:this.$route.params.content,  //后台待办项集合
                imgsrc:require('../../image/头像/小叶子.png'),
                trueitem:this.$route.params.success,
                flaseitem:this.$route.params.unsuccess,
                timeitem:'',
                timeindex:'',
                timebool:'',
                s:'00',
                m:'00',
                h:'00',
                itemtime:'',
                alltime:0,
            }
        },
        methods:{
            loginout:function(){
                // this.imgsrc=require('../../image/头像/首页背景.jpg')
                this.name=undefined;
                this.trueitem='';
                this.flaseitem='';
                this.alltime=0;
                //发送登出请求
                var xhr = new XMLHttpRequest();
                xhr.open('post','/api/register/loginout/');
//添加请求头，编码表单中的中文参数
                xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
//发送请求和传表单参数
                xhr.send('');
//xhr请求状态 0未初始化；1正在加载；2以加载；3交互中；4完成；
                xhr.onreadystatechange=function () {
                    if(xhr.readyState==4 && xhr.status == 200){
                        var respText = xhr.responseText;
                        //json字符串转化为js对象
                        var resp_obj = JSON.parse(respText);
                    }
                };

                //发送结束

            },
            creates:function(){
                if(this.name){
                    var self = this;
                    this.flaseitem.unshift(this.item);
                    //发送item请求
                    var xhr = new XMLHttpRequest();
                    xhr.open('post','/api/register/item/');
//添加请求头，编码表单中的中文参数
                    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
//发送请求和传表单参数
                    xhr.send('item='+this.item);
//xhr请求状态 0未初始化；1正在加载；2以加载；3交互中；4完成；
                    xhr.onreadystatechange=function () {
                        if(xhr.readyState==4 && xhr.status == 200){
                            var respText = xhr.responseText;
                            //json字符串转化为js对象
                            var resp_obj = JSON.parse(respText);
                        }
                    };

                    //发送结束
                    this.item=''
                }else{
                    alert('请先登录')
                }

            },
            del:function(e){
                if(e.target.getAttribute('bool')==0){
                    for(var i=0;i<this.flaseitem.length;i++){
                        if(e.target.getAttribute("ind") == i){
                            this.flaseitem.splice(i,1)
                        }
                    }
                }else if(e.target.getAttribute('bool')==1){
                    for(var i=0;i<this.trueitem.length;i++) {
                        if(e.target.getAttribute("ind") == i){
                            this.trueitem.splice(i,1)
                        }
                    }
                }
                //发送del请求
                var self = this;
                var xhr = new XMLHttpRequest();
                xhr.open('post','/api/register/delitem/');
//添加请求头，编码表单中的中文参数
                xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
//发送请求和传表单参数
                xhr.send('delindex='+e.target.getAttribute("ind")+'&delbool='+e.target.getAttribute('bool'));
//xhr请求状态 0未初始化；1正在加载；2以加载；3交互中；4完成；
                xhr.onreadystatechange=function () {
                    if(xhr.readyState==4 && xhr.status == 200){
                        var respText = xhr.responseText;
                        //json字符串转化为js对象
                        var resp_obj = JSON.parse(respText);
                    }
                };



                //发送结束
            },
            changebool:function(e){
                if(e.target.getAttribute('bool')==0){
                    for(var i=0;i<this.flaseitem.length;i++){
                        if(e.target.getAttribute("ind") == i){
                            this.trueitem.unshift(this.flaseitem[i])
                            this.flaseitem.splice(i,1)

                            this.timebool=''
                            this.timeindex = ''
                            this.timeitem = ''
                        }
                    }
                }else if(e.target.getAttribute('bool')==1){
                    for(var i=0;i<this.trueitem.length;i++) {
                        if(e.target.getAttribute("ind") == i){
                            this.flaseitem.unshift(this.trueitem[i])
                            this.trueitem.splice(i,1)
                        }
                    }
                }

                //发送change请求
                var self = this;
                var xhr = new XMLHttpRequest();
                xhr.open('post','/api/register/success/');
//添加请求头，编码表单中的中文参数
                xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
//发送请求和传表单参数
                xhr.send('index='+e.target.getAttribute("ind")+'&bool='+e.target.getAttribute('bool'));
//xhr请求状态 0未初始化；1正在加载；2以加载；3交互中；4完成；
                xhr.onreadystatechange=function () {
                    if(xhr.readyState==4 && xhr.status == 200){
                        var respText = xhr.responseText;
                        //json字符串转化为js对象
                        var resp_obj = JSON.parse(respText);
                    }
                };



                //发送结束
            },
            itemclick:function(e){
                for(var i=0;i<this.flaseitem.length;i++){
                    if(e.target.getAttribute('ind')==i){
                        var reg=/x$/;
                        var str = document.getElementsByClassName('trueli')[i].textContent.replace(reg,"");
                        document.getElementsByClassName('trueli')[i].style.backgroundColor='gray'
                        this.timeindex = document.getElementsByClassName('trueli')[i].getAttribute('ind')
                        this.timebool = document.getElementsByClassName('trueli')[i].getAttribute('bool')
                        this.timeitem = str
                    }else{
                        document.getElementsByClassName('trueli')[i].style.backgroundColor='rgb(243,244,246)'
                    }
                }
            },
            time:function(){
                this.s=this.s*1+1
                if(this.s*1>=60){
                    this.s=0;
                    this.m=this.m*1+1;        //分钟
                }
                if(this.m*1>=60){
                    this.m=0;
                    this.h=this.h*1+1;        //小时
                }

                if(this.h*1<=9){this.h='0'+this.h*1}
                if(this.m*1<=9){this.m='0'+this.m*1}
                if(this.s*1<=9){this.s='0'+this.s*1}
            },
            timeclick:function (e) {
                if(e.target.getAttribute('class')=='iconfont icon-bofang'){
                    document.getElementById('itemtime').setAttribute('class','iconfont icon-stop')
                    document.getElementById('start').setAttribute('class','iconfont icon-stop')
                    this.timefunction = setInterval(this.time,1000)
                }else{
                    document.getElementById('itemtime').setAttribute('class','iconfont icon-bofang')
                    document.getElementById('start').setAttribute('class','iconfont icon-bofang')
                    clearInterval(this.timefunction)
                }

            },
            stopclick:function(e){
                clearInterval(this.timefunction)
                if(this.timeitem!=''){
                    this.itemtime = this.h*1*60+this.m*1;
                    //发送time请求
                    var self = this;
                    var xhr = new XMLHttpRequest();
                    xhr.open('post','/api/register/time/');
//添加请求头，编码表单中的中文参数
                    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
//发送请求和传表单参数
                    xhr.send('index='+this.timeindex+'&bool='+this.timebool+'&time='+this.itemtime);
//xhr请求状态 0未初始化；1正在加载；2以加载；3交互中；4完成；
                    xhr.onreadystatechange=function () {
                        if(xhr.readyState==4 && xhr.status == 200){
                            var respText = xhr.responseText;
                            //json字符串转化为js对象
                            var resp_obj = JSON.parse(respText);
                            self.alltime = resp_obj.data
                        }
                    };
                    //发送结束
                }
                this.h='00';
                this.m='00';
                this.s='00';
                document.getElementById('start').setAttribute('class','iconfont icon-bofang')
                document.getElementById('itemtime').setAttribute('class','iconfont icon-bofang')
            }
        },
        created() {
            if(this.name == undefined){
                self = this;
                //发送登录请求
                var xhr = new XMLHttpRequest();
                xhr.open('post','/api/register/name/');
//添加请求头，编码表单中的中文参数
                xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
//发送请求和传表单参数
                xhr.send('');
//xhr请求状态 0未初始化；1正在加载；2以加载；3交互中；4完成；
                xhr.onreadystatechange=function () {
                    if(xhr.readyState==4 && xhr.status == 200){
                        var respText = xhr.responseText;
                        //json字符串转化为js对象
                        var resp_obj = JSON.parse(respText);
                        if(resp_obj.name==''){
                            resp_obj.name = undefined
                        }
                        self.name = resp_obj.name;
                        self.trueitem = resp_obj.success;
                        self.flaseitem = resp_obj.unsuccess;
                        self.alltime = resp_obj.time
                    }
                };
                //发送结束
            }
        }
    }
</script>

<style scoped>
    .changeitem{
        width: 20px;
        height: 20px;
        border: 1px solid black;
        border-radius: 50%;
        cursor:pointer;
        text-align: center;
        line-height: 25px;
        font-size: 28px;
        margin-right: 10px;
        margin-left: 20px;
    }
    .truefont{
        text-decoration: line-through;
        color: gray;
    }
    #selecttop{
        cursor:pointer;
        position: absolute;
        top: 60px;
        left: 35px;
        border-width: 10px;
        border-style: solid;
        border-color:transparent transparent darkgrey transparent;
    }
    #selectuser ul{
        background-color:darkgrey;
        list-style-type: none;
        position: absolute;
        top: 80px;
        left: 11px;
    }
    #selectuser ul li{
        padding: 5px 5px 10px 5px;
        cursor: pointer;
        text-align: center;
        width: 80px;
    }
    #selectuser ul li:hover{
        background: cornflowerblue;
    }
    #box{
        background-color:white;
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-repeat:no-repeat;
        background-size:100% 100%;
        z-index: 2;
    }
    .nav{
        padding: 18px;
        display: flex;
        align-items: center;
        position: relative;
    }
    .img{
        border: 1px solid gray;
        width: 50px;
        height: 50px;
        display: inline-block;
        border-radius: 50%;
        overflow: hidden;
        cursor:pointer;
    }
    #select{
        display: none;
    }
    .img:hover+#select{
        display: block;
        z-index: 2;
    }
    #select:hover{
        display: block;
        z-index: 2;
    }
    .img img{
        width:100%;
        height:100%;
    }
    .content{
        width: 100%;
        height: 87%;
        display: flex;
        justify-content: space-between;
        background-color:white;
    }
    /*待办事项集合*/


    .list{
        margin-top: 20px;
        width: 20%;
        height: 100%;
        overflow: hidden;
    }
    .todolist{
        width: 103%;
        height: 100%;
      }
    .todolist ul li{
        background-color:rgb(245,245,245);
        width: 90%;
        margin: 5px auto;
        border-radius: 10px;
        height: 30px;
        padding:10px 0;
        display: flex;
        align-items: center;
        list-style-type: none;
        position: relative;
    }
    .todolist ul li .delitem{
        font-size: 20px;
        cursor: pointer;
        position: absolute;
        right: 8px;
    }
    .item{
        width: 78%;
        background: rgb(243,244,246);
    }
    .todoitem{
        width: 100%;
        height: 94%;
        overflow:auto;
        margin: 0 auto;
    }
    #msgbox{
        width: 90%;
        height: 70px;
        margin: 20px auto;
        background-color:white;
        border-radius: 15px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        text-align: center;
    }
    #msgbox .msgs{
        width: 10%;
        height: 80%;
    }
    #msgbox .msgs font{
        font-size: 12px;
        color: gray;
    }
    #msgbox .msgs h1{
        color: red;
    }
    .input{
        border: 1px solid gray;
        width: 500px;
        height: 30px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }
    .input input{
        width: 80%;
        height: 100%;
        outline: none;
        border: none;
        background: none;
    }

    .input button{
        transition: all 1s;
        width: 20%;
        height: 100%;
        outline: none;
        border: 1px solid gray;
        background: none;
        cursor:pointer;
    }
    .input button:hover{
          background-color: orange;
      }
    #timeli{
        border: 1px solid gray;
        width: 50%;
        height:50px;
        margin: 50px auto;
        display: flex;
        align-items: center;
    }
    #time{
        border-radius: 50px;
        margin: 20px auto;
        border: 1px solid gray;
        width: 40%;
        height:180px;
        text-align: center;
        font-size: 80px;
    }
</style>