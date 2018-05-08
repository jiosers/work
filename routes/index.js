var express = require('express');
var router = express.Router();

/* GET home page. */
let users={"june":"123456"};
router.get('/', function(req, res, next) {
	console.log(req.session.num)
	req.session.num=req.session.num||0;
	let num=++req.session.num;
 
  	res.render('index',{num})
});

router.post("/login",(req,res,next)=>{
	let {name,password}=req.body;
	let state=0;
	if(users[name]&&users[name]===password){
		//req.session.user={name,password};
		state=1;
	}
	console.log("num:",req.session.num)
	req.session.num=req.session.num||0;
	let num=++req.session.num;
	res.send({state})
})
//聊天室界面
router.get('/chat',(req,res,next)=>{
	//res.locals.user=req.session.user||""
	if(req.session.user){
  	res.render("chat");
  }else{
  	res.redirect('/')
  }
	console.log("fff:",req.session.user,req.session.num);
})
module.exports = router;
