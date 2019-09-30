<template>
    <div id="box">
        <div class="conitainer">
            <div class="form" id="login">
                <div class="text">
                    <i class="far fa-envelope" style="color:white;"></i>
                    <input type="text" placeholder="请输入您的邮箱" v-on:input="fname" v-model="loginname" class="inputtext" id="loginemail" name="email" autocomplete="off">
                </div>
                <span id="loginemailspan">{{loginnamespan}}</span>
                <div class="text">
                    <i class="fas fa-unlock-alt" style="color:white;"></i>
                    <input type="password" placeholder="请输入密码" v-on:input="fpwd" v-model="password" class="inputtext" id="loginpwd" name="password" autocomplete="off">
                </div>
                <span id="loginpwdspan">{{loginpwd}}</span>
                <div class="btn">
                    <button id="loginbtn" v-on:click="loginbtn">登录</button>
                </div>
                <div style="display: flex;justify-content: space-around;" class="foot">
                    <div>
                        <input type="checkbox" id="rember"><label for="rember" style="cursor:pointer;"><font>记住密码</font></label>
                    </div>
                    <router-link to="/register" style="text-decoration: none;color: black;"><font style="cursor:pointer;">未注册，前往注册界面</font></router-link>
                    <font href="" style="cursor:pointer;">忘记密码</font>
                </div>
                <router-view/>
            </div>
            <router-view/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data:function(){
            return{
                loginname:'',
                loginnamespan:'',
                password:'',
                loginpwd:''
            }
        },methods:{
            loginbtn:function(){
                if(this.loginname!='' && this.password!=''){
                    var xhr = new XMLHttpRequest();
                    xhr.open('post','/api/register/login/');
//添加请求头，编码表单中的中文参数
                    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
//发送请求和传表单参数
                    xhr.send('email='+this.loginname+'&password='+this.password);
                    console.log('发送成功')
//xhr请求状态 0未初始化；1正在加载；2以加载；3交互中；4完成；
                    xhr.onreadystatechange=function () {
                        if(xhr.readyState==4 && xhr.status == 200){
                            console.log(xhr.responseText);
                            var respText = xhr.responseText;
                            //json字符串转化为js对象
                            var resp_obj = JSON.parse(respText);
                            console.log(resp_obj);
                            if(resp_obj.msg == '登录成功'){
                                alert('恭喜您，登录成功')
                            }else if(resp_obj.msg == '密码输入错误'){
                                alert('密码输入错误')
                            }else if(resp_obj.msg == '无此账号请前往注册或查看是否输入错误'){
                                alert('无此账号请前往注册或查看是否输入错误')
                            }

                        }
                    };
                }else{
                    if(this.loginname==''){this.loginnamespan ='用户名不能为空'}
                    if(this.password==''){this.loginpwd ='用户名不能为空'}
                }
            },
            fname:function(){
                this.loginnamespan = ''
            },
            fpwd:function(){
                this.loginpwd = ''
            },
        },
    }
</script>

<style scoped>
    #box{
        background-image: url("../.././image/注册背景.jpg");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width:100%;
        height:720px;
        background-attachment:fixed
    }
    .conitainer{
        width: 450px;
        height:550px;
        border: 1px solid white;
        box-shadow: 2px 2px 9px black;
        display: flex;
        align-items: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform:translate(-50%,-50%);
        transition: 2s;
    }
    .conitainer span{
        display: flex;
        justify-content: left;
        font-size: 16px;
        height: 15px;
        margin-left:67px;
        color: red;
        margin-top:0 ;
    }
    .text{
        width: 70%;
        margin: 10px auto;
        border-bottom:2px solid gray;
    }
    .inputtext{
        width: 90%;
        height: 35px;
        background:none;
        outline: none;
        border:none;
        color:white;
        margin-left: 3%;
    }

    .inputtext::-webkit-input-placeholder{
        /* WebKit browsers */
        color: white;
    }
    .inputtext:-moz-placeholder{
        /* Mozilla Firefox 4 to 18 */
        color: white;
    }
    .inputtext::-moz-placeholder{
        /* Mozilla Firefox 19+ */
        color: white;
    }
    .inputtext:-ms-input-placeholder{
        /* Internet Explorer 10+ */
        color: white;
    }
    .btn{
        width: 40%;
        margin: 30px auto;
    }
    button{
        width: 100%;
        height: 50px;
        background:none;
        outline: none;
        border: 2px solid gray;
        border-radius: 20px;
        color: white;
        cursor:pointer;
        font-size: 20px;
        transition:0.6s;
    }
    button:hover{
        background-color:rgb(0,181,299);
    }
    .form{
        width: 100%;
    }
    .foot font:hover{
        color: white;
    }
</style>