//webpack的配置文件
module.exports = {
    lintOnSave:false,
    //默认'/' 我们需要配置成绝对路径 C:\Users\孙智超\Desktop\vue-todo 或相对路径,便于本地访问看效果.
    publicPath:'./',
    devServer:{
        proxy:{
            '/api':{
                target:'http://127.0.0.1:8000',//后端服务器地址
                changeOrigin: true,
                secure:false,
                pathRewrite:{
                    '^/api':''
                }
            }
        }
    }
};