var http=require("http");
var fs =require("fs");
http.createServer(function(req,res){
	var html=fs.readFileSync("../liu.html");//读取文件
	res.end('html')
}).listen(3000);
