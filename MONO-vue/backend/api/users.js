const express = require("express");
const router = express.Router();
const fs = require('fs');

let path = require("path");//设置路径
//  /api/users
let showData ={};

fs.readFile(path.join(__dirname, '../data/indexhome.json'), (error, data) => {
	console.log(data)
	  showData = {
	    list: JSON.parse(data.toString())
	  }
})

router.get("/users",(req,res)=>{
	//获取到get请求的数据

	console.log(req.query);

	let {random,userName} = req.query;
	res.send({	
		code:0,
		message:"数据请求成功",	
		data:showData
	});
});

module.exports = router;