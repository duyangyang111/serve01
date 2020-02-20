var express=require("express");
var router=express.Router();
var pool=require("../pool");


router.post("/",(req,res)=>{
  var {phone,pwd}=req.body;
  var sql1="select * from login where phone=?";
  var sql="insert into login (phone,pwd) values (?,?)" ;
  // pool.query(sql,[phone,pwd],(err,result)=>{
  //   err&&console.log(err);
  //   if(result.length>0){
  //   res.write(JSON.stringify({ok:1}));
  //   }else{
  //     res.write(JSON.stringify({ok:0,msg:"注册失败"}))
  //   }
  //   res.end();
  // })
  pool.query(sql1,[phone],(err,result)=>{
    err&&console.log(err);
    if(result.length>0){
      res.write(JSON.stringify({ok:0,msg:"用户已存在"}))
      res.end();
    }else{
      pool.query(sql,[phone,pwd],(err,result)=>{
        err&&console.log(err);
        if(result.affectedRows>0){
        res.write(JSON.stringify({ok:1,msg:"注册成功"})) 
        res.end();
      } 
    })
  } 
  })
})
 module.exports=router;