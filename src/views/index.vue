<template>
    <div id="box">
        <div class="nav">
            <div class="img">
                <img :src="imgsrc" alt="" v-on:click="img">
            </div>
            &emsp;&emsp;
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
                    <font>未执行</font>
                    <div id="f">
                        <ul>
                            <li v-for="(item,index) in flaseitem" v-on:click="del" v-bind:ind="index" v-bind:bool=0>{{item}}</li>
                        </ul>
                    </div>
                    <hr>
                    <font>已执行</font>
                  <div id="t">
                      <ul>
                          <li v-for="(item,index) in trueitem" v-on:click="del" v-bind:ind="index" v-bind:bool="1">{{item}}</li>
                      </ul>
                  </div>

                </div>
            </div>
            <div class="item">
                <div class="input">
                    <input type="text" placeholder="请输入一个任务" v-model="item" v-on:keyup.13='creates'><button v-on:click="creates">提交</button>
                </div>
                <div class="todoitem">
                    <ul>
                        <li v-for="(item,index) in flaseitem"><input type="checkbox">{{item}} <button v-on:click="del" v-bind:ind="index" v-bind:bool=0>删除</button><button v-on:click="changebool" v-bind:ind="index" v-bind:bool=0>更改</button></li>
                        <li v-for="(item,index) in trueitem"><input type="checkbox">{{item}} <button v-on:click="del" v-bind:ind="index" v-bind:bool=1>删除</button><button v-on:click="changebool" v-bind:ind="index" v-bind:bool=1>更改</button></li>
                    </ul>
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
                name:this.$route.params.name,
                item:'',   //待办项
                // items:'',  //待办集合
                // todolist:['集装箱1'],  //后台待办项
                todoitem:this.$route.params.content,  //后台待办项集合
                imgsrc:require('../../image/头像/小叶子.png'),
                trueitem:this.$route.params.success,
                flaseitem:this.$route.params.unsuccess,
            }
        },
        methods:{
            img:function(){
                this.imgsrc=require('../../image/头像/首页背景.jpg')
            },
            creates:function(e){
                var self = this;
                this.flaseitem.push(this.item);
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
                            this.trueitem.push(this.flaseitem[i])
                            this.flaseitem.splice(i,1)
                        }
                    }
                }else if(e.target.getAttribute('bool')==1){
                    for(var i=0;i<this.trueitem.length;i++) {
                        if(e.target.getAttribute("ind") == i){
                            this.flaseitem.push(this.trueitem[i])
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
        },

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
        z-index: 2;
    }
    .nav{
        border: 1px solid gray;
        padding: 18px;
        display: flex;
        align-items: center;
    }
    .img{
        border: 1px solid gray;
        width: 50px;
        height: 50px;
        display: inline-block;
        border-radius: 50%;
        overflow: hidden;
    }
    .img img{
        width:100%;
        height:100%;
    }
    .content{
        width: 100%;
        height: 87%;
        margin-top: 90px;
        display: flex;
        justify-content: space-between;
        border: 2px solid black;
    }
    /*待办事项集合*/

    .todolist{
        width: 106%;
        height: 103%;
        overflow: auto;
    }
    .list{
        width: 35%;
        height: 100%;
        overflow: hidden;
        overflow-x: hidden;
        border: 1px solid red;
    }
    .todolist ul li{
        border: 1px solid black;
        background-color:gray;
        width: 100%;
        height: 30px;
        padding:10px 0;
        display: flex;
        align-items: center;
        list-style-type: none;
    }
    #f{
        width: 100%;
        height: 50%;
        overflow: auto;
        overflow-x: hidden;
    }
    #t{
        width: 100%;
        height: 50%;  overflow: hidden;
        overflow: auto;
        overflow-x: hidden;
    }
    .item{
        width: 60%;
        border: 1px solid green;
    }
    .todoitem{
        width: 100%;
        height: 94%;
        border: 1px solid red;
        overflow:auto;
        margin: 0 auto;
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
        width: 20%;
        height: 100%;
        outline: none;
        border: 1px solid gray;
        background: none;
        cursor:pointer;
    }
    .todoitem ul li{
        display: flex;
        align-items: center;
        list-style-type: none;
        margin: 10px auto;
        width: 100%;
        height: 60px;
        background-color:white;
    }
</style>