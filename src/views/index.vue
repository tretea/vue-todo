<template>
    <div id="box">
        <div class="nav">
            <div class="img"></div>
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
                    <ul>
                        <li v-for="(item,index) in todolist">{{item}}</li>
                    </ul>
                </div>
                <button id="create" v-on:click="create"><h3>&emsp;&emsp;+&nbsp;新建</h3></button>
            </div>
            <div class="item">
                <div class="input">
                    <input type="text" v-model="item"><button v-on:click="creates">提交</button>
                </div>
                <div class="todoitem">
                    <ul>
                        <li v-for="(item,index) in todoitem">{{index}}{{item}}</li>
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
                items:'',  //待办集合
                todolist:['集装箱1'],  //后台待办项
                todoitem:this.$route.params.content  //后台待办项集合
            }
        },
        methods:{
            creates:function(e){
                this.todoitem.push(this.item)
            },
            create:function(e){
                this.todolist.push('集装箱')
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
    }
    .content{
        width: 100%;
        height: 81%;
        margin-top: 90px;
        display: flex;
        justify-content: space-between;
    }
    .todolist{
        width: 106%;
        height: 103%;
        overflow: auto;
    }
    .list{
        width: 18%;
        height: 100%;
        overflow: hidden;
        overflow-x: hidden;
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
    #create{
        width: 17.5%;
        height: 40px;
        position: fixed;
        bottom: 0;
        left: 0;
        outline: none;
        border: 1px solid gray;
        background: none;
        text-align: left;
        cursor:pointer;
        color: red;
    }
    .item{
        width: 83%;
        border: 1px solid green;
    }
    .todoitem{
        height: 94%;
        border: 1px solid red;
        overflow:auto;
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
    }
    .todoitem ul li{
        display: flex;
        align-items: center;
        list-style-type: none;
        margin: 3px 20px auto;
        width: 95%;
        height: 60px;
        background-color:white;
    }
</style>