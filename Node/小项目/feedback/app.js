var express=require('express')

var app=express()

app.use('/public/',express.static('./public/'))

//配置模板引擎
app.engine('html', require('express-art-template'));

//修改render函数的默认路径
//app.set('views','vv')

var comments = [{
    name: '张三',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三2',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三3',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三4',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三5',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  }
]

//首页
app.get('/',function(req,res){
    res.render('index.html',{
        comments:comments
    })
})

//留言页面
app.get('/post',function(req,res){
    res.render('post.html')
})

//get请求
/* app.get('/pinglun',function(req,res){
    var comment=req.query
    comment.dateTime='2015-10-16'
    comments.unshift(comment)
    res.redirect('/')
    //res.statusCode=302
    //res.setHeader('Location','/')
}) */

//post请求
app.post('/post',function(req,res){
    //console.log('收到表单post请求了。。。')
    
})

app.listen(3000,function(){
    console.log('running ...')
})