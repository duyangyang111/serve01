//查询当前登录用户购物车列表
var express=require("express");
var router=express.Router();
var pool=require("../pool");
var query=require("./query");
router.get("/findcart",(req,res)=>{
  var sql = "SELECT * FROM car";
  pool.query(sql,[],(err,result)=>{
    if(err)throw err;
    // console.log(result);
    res.send({code:1,msg:"查询成功",data:result})
  })
})
module.exports=router;