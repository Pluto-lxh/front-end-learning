var express=require('express')

var app=express()

app.engine('html', require('express-art-template'));

app.use('/node_modules/',express.static('./node_modules/'))
app.use('/piblic/',express.static('./public/'))


app.listen('3000',function(){
    console.log('running 3000')
})

app.get('/',function(req,res){
    res.render('index.html')
})