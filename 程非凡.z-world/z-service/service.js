
var express = require('express');
var fs = require('fs');
var app = express();

var gdata = null; 
var bannerdata = null;
var ulfloatdata = null;
var freedata = null;
var modledata = null;

fs.readFile("sj/zsj.json",function(err,data){
	if(err)
		throw new Error('读取数据出错！');
	gdata = data;

	fs.readFile("sj/data/index/banner.json",function(err1,data1){
		if(err1)
			throw new Error('1读取数据出错！');
		bannerdata = data1;	

		fs.readFile("sj/data/index/menu.json",function(err2,data2){
			if(err2)
				throw new Error('2读取数据出错！');
			ulfloatdata = data2;	

			fs.readFile("sj/data/index/freewalk.json",function(err3,data3){
				if(err3)
					throw new Error('2读取数据出错！');
				freedata = data3;

				fs.readFile("sj/data/citywalk/cityWalkList.json",function(err4,data4){
					if(err4)
						throw new Error('4读取数据出错！');
					modledata = data4;				
				app.listen(7000);
				})
			})
		})			
	})			
})

app.all('/*',function (req,res,next){
	res.header("Access-Control-Allow-Origin", "*");  
    res.header("Access-Control-Allow-Headers", "X-Requested-With");  
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    next();
})
app.get('/modle',(req,res)=>{
	res.header('Content-Type','application/json');
	res.send(modledata);
})

app.get('/books',(req,res)=>{
	res.header('Content-Type','application/json');
	res.send(gdata);
})

app.get('/banner',(req,res)=>{
	res.header('Content-Type','application/json');
	res.send(bannerdata);
})

app.get('/ulfloat',(req,res)=>{
	res.header('Content-Type','application/json');
	res.send(ulfloatdata);
})

app.get('/freewalk',(req,res)=>{
	res.header('Content-Type','application/json');
	res.send(freedata);
})

app.get('/search',(req,res)=>{
	var searchdata = {"name":"tom"}
	res.header('Content-Type','application/json');
	res.send(searchdata);
})

var http = require('http');
//1.suggest组件
app.get('/sitesearch/:keyword' , function (req , res) {
	var url = req.params.keyword;
	console.log(url)
    // 查询本机ip
    // http://z.qyer.com/qcross/home/ajax?action=sitesearch&keyword=b&timer=1478686648677&_=1478678019964
    var sreq = http.request({
        host:     'z.qyer.com', // 目标主机
        path:     '/qcross/home/ajax?action=sitesearch&keyword='+url, // 目标路径
        method:   'get' // 请求方式
    }, function(sres){
        sres.pipe(res);
        sres.on('end', function(){
            console.log('done');
        });
    });
    if (/POST|PUT/i.test(req.method)) {
        req.pipe(sreq);
    } else {
        sreq.end();
    }
})


console.log('服务器已启动');