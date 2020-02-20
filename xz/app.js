//使用express构建web服务器 --11:25
const express = require('express');
const session = require("express-session");
const bodyParser = require('body-parser');
const cors=require("cors");
/*引入路由模块*/
var product=require("./routes/product");
var register=require("./routes/register")
var detail=require("./routes/details");
var products=require("./routes/products");
var login=require("./routes/login");
var cartItems=require("./routes/cartItems");
var cart=require("./routes/cart");
var findcart=require("./routes/findcart");

var app = express();
app.use(cors({
  origin:['http://localhost:8080'],
  credentials:true
}))
var server = app.listen(5050);
//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
//托管静态资源到public目录下
app.use(express.static('public'));
app.use(session({
  secret:'随机字符串',
  cookie:{maxAge:60*1000*30},//过期时间ms
  resave:false,
  saveUninitialized:true
}));//将服务器的session，放在req.session中
/*使用路由器来管理路由*/
app.use("/product",product);
// app.use("/shop_cart",findcart);
app.use("/shop_cart",cart);
app.use("/shop_cart",findcart)
app.use("/product_detail",detail);
app.use("/products",products);
app.use("/login",login);
app.use("/cartItems",cartItems)
app.use("/register",register)