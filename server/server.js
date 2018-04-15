var express = require('express');
var app = express();
var stations = require('./stations.json');
//解决跨域的问题
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.get('/api/stations',function(req,resp){
	resp.send(stations);
})

var server = app.listen(3000,function(){
	console.log("启动服务,服务器地址为: http://localhost:3000/api/stations");
})
