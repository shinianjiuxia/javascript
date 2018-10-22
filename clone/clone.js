
/*
     
 * 
 * 
 * 
 */

var fs = require('fs');

function clone(oldPath,newPath){
	//var str = null;
	
	// 先把文件读取出来
//	fs.readFileSync(oldPath,'utf-8',function(err,data){
//		if(!err){
//			// 读取成功
//			str = data;
//		}
//		
//	})
//	
//	
//	
//	fs.writeFileSync(newPath,str,function(err){
//		
//	});
	fs.readFile(oldPath,'utf-8',function(err,data){
		if(!err){
			// 读取成功
			fs.writeFile(newPath,data,function(err){
				if(!err){
					console.log('复制成功')
				}else{
					console.log('复制失败')
				}
			});
		}else{
			console.log('读取失败')
		}
	})	
}

exports.clone = clone;

