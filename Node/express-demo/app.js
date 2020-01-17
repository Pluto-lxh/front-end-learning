//加载包
var express=require('express')

//创建服务器应用程序，也就是原来的http.createServer
var app=express()

//当服务器接收到get请求时，执行回调处理函数
app.get('/',function (req,res) {
    res.send('hello express！')
})

//公开指定目录
//这样指定后，可以直接通过/public/xx的方式访问public目录中的所有资源
app.use('/public',express.static('./public/'))

app.get('/about',function (req,res) {
    res.send('hello about！')
})

//相当于server.listen
app.listen(3000,function () {
    console.log('app is running 在端口3000')
})