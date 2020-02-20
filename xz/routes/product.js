const express=require("express");
var router=express.Router();
var pool=require("../pool");
router.get("/",(req,res)=>{
  var sql="SELECT * FROM duoyi_shop_product";
  pool.query(sql,[],(err,result)=>{
    // res.writeHead(200,{
    //   "Access-Control-Allow-Origin":"http://127.0.0.1:5500"
    // });
    res.write(JSON.stringify(result));
    res.end();
  })
})
module.exports=router;
//http://localhost:3000/index