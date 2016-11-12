var express = require('express');
var fs = require('fs');
var app = express();

//存储从文件读取的数据
var navData = null;
var bannerData = null;
var menuData = null;

//读取文件中的数据
fs.readFile('data/nav.json',function(err1,data1){
	if(err1)
		throw new Error('读取数据出错1!');
	navData = data1;
	fs.readFile('data/banner.json',function(err2,data2){
		if(err2)
			throw new Error('读取数据出错2!');
		bannerData = data2;
		fs.readFile('data/menu.json',function(err3,data3){
			if(err3)
				throw new Error('读取数据出错3!');
			menuData = data3;
			app.listen(9000);
	console.log('服务器已启动。。。');
		})
	})	
})

//定义了一个静态页面的web服务
//app.use(express.static('public'));

//跨域访问里的cross方法
app.all('/*', function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'X-Requested-With');
	res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
	next();
});

app.get("/nav",function(req,res){
    res.header("Content-type","application/json");
	res.send(navData);
});

app.get("/banner",function(req,res){
    res.header("Content-type","application/json");
	res.send(bannerData);
});

app.get("/menu",function(req,res){
    res.header("Content-type","application/json");
	res.send(menuData);
})