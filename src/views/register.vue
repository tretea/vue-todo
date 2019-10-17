<template>
    <div id="box">
        <div class="register">
            <div class="conitainer">
                <router-link to="/"><img src="../../image/logo.png" alt="" width="136px" height="80px" style="margin-top: 30px"></router-link>
                <div class="form" id="register">
                    <div class="text">
                        <i class="far fa-user"></i>
                        <input v-model="registername" v-on:input="this.inputname" type="text" placeholder="请输入您的用户名" maxlength="15" class="inputtext" id="name" name="name" autocomplete="off">
                    </div>
                    <span id="namespan">{{namespan}}</span>
                    <div class="text">
                        <i class="far fa-envelope"></i>
                        <input v-model="email" v-on:change="this.inputemail" type="text" placeholder="请输入您的邮箱" class="inputtext" id="email" name="email" autocomplete="off">
                    </div>
                    <span id="emailspan">{{emailspan}}</span>
                    <div class="text">
                        <i class="fas fa-unlock-alt"></i>
                        <input v-model="password" v-on:input="this.inputpwd" type="password" placeholder="请输入密码" class="inputtext" id="pwd" name="password" autocomplete="off">
                    </div>
                    <span id="pwdspan">{{pwdspan}}</span>
                    <div class="text">
                        <i class="fas fa-unlock-alt"></i>
                        <input v-model="surepassword" v-on:input="this.inputsurepwd" type="password" placeholder="请输入确认密码" class="inputtext" id="surepwd" autocomplete="off">
                    </div>
                    <span id="surepwdspan">{{surepwdspan}}</span>
                    <div class="btn">
                        <button id="registerbtn" v-on:click="this.registerbtn">注册</button>
                    </div>
                    <div style="text-align: center;" class="foot">
                        <router-link to="/login" style="text-decoration: none;color: black;"><font style="cursor:pointer;">已有账号，前往登录界面</font></router-link>
                    </div>
                </div>
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "register",
        data:function(){
            return{
                registername:'',
                email:'',
                password:'',
                surepassword:'',
                namespan:'',
                emailspan:'',
                pwdspan:'',
                surepwdspan:'',
            }
        },
        methods:{
            inputname:function(){
                if(this.registername.length>=15){
                    this.namespan='用户名必须小于15个字符'
                }else if(this.zzstr(this.registername)){
                    this.namespan='用户名不能包含特殊字符以及空格'
                }else{
                    this.namespan=''
                }
            },
            inputemail:function(){
                if(this.patternemail(this.email)){
                    this.emailspan = ''
                }else{
                    this.emailspan = '邮箱格式不正确'
                }
            },
            inputpwd:function(){
                if(this.password.length<6){
                    document.getElementById('pwdspan').innerText = '密码长度必须大于6个字符';
                }else {
                    document.getElementById('pwdspan').innerText = '';
                }
            },
            inputsurepwd:function(){
                if(this.password){
                    if(this.surepassword != this.password) {
                        this.surepwdspan = '两次密码不一致';
                        this.pwdspan = '两次密码不一致';
                    }else {
                        this.surepwdspan = '';
                        this.pwdspan = '';
                    }
                }else{
                    this.surepwdspan = '请先输入密码,在输入确认密码';
                }
            },
            //邮箱判断
            patternemail:function(emailinput){
        var tsstr = new RegExp(/^([a-zA-Z\d])(\w|\-)+@[a-zA-Z\d]+\.[a-zA-Z]{2,4}$/)
        if(tsstr.test(emailinput)){
            return true
        }else{
            return false
        }
    },
            //用户名判断
            zzstr:function(str1){
            var tsstr = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~ ！@#￥……&*（）——|{}【】‘；：”“'。，、？]");
            if(tsstr.test(str1)){
                return true
            }else{
                return false
            }
        },
            //注册
            registerbtn:function(){
                if(this.registername!='' && this.email!='' && this.password!='' && this.surepassword!=''){
                    if(this.namespan=='' && this.emailspan=='' && this.pwdspan=='' && this.surepwdspan==''){
                        var xhr = new XMLHttpRequest();
                        xhr.open('post','api/register/');
//添加请求头，编码表单中的中文参数
                        xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
//发送请求和传表单参数
                        xhr.send('name='+this.registername+'&password='+this.password+'&email='+this.email);
//xhr请求状态 0未初始化；1正在加载；2以加载；3交互中；4完成；
                        xhr.onreadystatechange=function () {
                            if(xhr.readyState==4 && xhr.status == 200){
                                var respText = xhr.responseText;
                                //json字符串转化为js对象
                                var resp_obj = JSON.parse(respText);;
                                if(resp_obj.msg == '注册成功'){
                                    alert('恭喜您，注册成功')
                                }else if(resp_obj.msg == '注册失败,您的邮箱已经注册过'){
                                    alert('非常抱歉,您的邮箱已经注册过了')
                                }

                            }
                        };
                    }
                }else{
                    if(this.registername==''){
                        this.namespan = '用户名不能为空'
                    }
                    if(this.email==''){
                        this.emailspan = '邮箱不能为空'
                    }
                    if(this.password==''){
                        this.pwdspan = '密码不能为空'
                    }
                    if(this.surepassword==''){
                        this.surepwdspan = '请输入确认密码'
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .register{
        width: 100%;
        height: 100%;
        background-color:rgba(0,0,0,0.4) ;
    }
    #box{
        background-color:rgb(244,244,244);
    }
    .conitainer{
        flex-direction: column;
        width: 450px;
        height:550px;
        /*border: 1px solid gray;*/
        /*box-shadow: 2px 2px 9px black;*/
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
        color:black;
        margin-left: 3%;
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
        background-color:rgb(255,90,68);
        color: white;
        cursor:pointer;
        font-size: 20px;
    }
    .form{
        width: 100%;
    }
    .foot font:hover{
        color: gray;
    }
</style>
