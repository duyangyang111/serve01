var express=require("express");
var router=express.Router();
var pool=require("../pool");
var query=require("./query");
router.get("/",(req,res)=>{
  var lid = req.query.lid;
  var title = req.query.title;
  var price = req.query.price;
  var n = req.query.n
  var sql="SELECT * FROM car WHERE title = ? AND lid = ? ";
  query(sql,[title,lid]).then(result=>{
    if(result.length==0){
      var sql="INSERT INTO car VALUES(?,?,?,?)";
      pool.query(sql,[lid,title,price,n],(err,result)=>{
        res.send();
      })
    }else{
      var sql = "UPDATE car SET n=n+? WHERE  title =? AND lid = ? ";
      pool.query(sql,[n,title,lid],(err,result)=>{
        res.send();
      })
    }
  })
})

router.get("/",(req,res)=>{
  var sql = "SELECT * FROM car";
  pool.query(sql,[],(err,result)=>{
    if(err)throw err;
    console.log(result);
    res.send({code:1,msg:"查询成功",data:result})
  })
})
module.exports=router;
