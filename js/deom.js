
var obj = {
	name:'text',
	dirName:[{
		name:'img',
		content:[],
		type:'dir'
	},
	{
		name:'css',
		content:[],
		type:'dir'
	},
	{
		name:'js',
		content:[],
		type:'dir'
	},
	{
		name:'index.html',
		content:`<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title></title>
	</head>
	<body></body>
</html>`,
		type:'file'
	}]	
}

var fs=require('fs');
  var name=obj.name;
  var read=fs.createReadStream('./name');
  var w =fs.createWriteStream('fs.mkdir('./name',function(error){
  	}');
  read.on('data',function(chunk){
  	  console.log(arguments)
  	w.write(chunk);
  })
