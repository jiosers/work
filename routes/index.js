var express = require('express');
var router = express.Router();

/* GET home page. */
let users={"june":"123456"};
router.get('/', function(req, res, next) {
	let see=req.session;
	if(see.user&&users[see.user.name]===see.user.password){
		res.redirect('/chat')
	}else{
		res.render('index')
	}
});

router.post("/login",(req,res,next)=>{
	let {name,password}=req.body;
	let state=0;
	if(users[name]&&users[name]===password){
		req.session['user']={name,password};
		state=1;
	}
	console.log("req.session:",req.session);
	res.send({state})
})
//聊天室界面
router.get('/chat',(req,res,next)=>{
	//res.locals.user=req.session.user||""
	console.log("req:",req.session);
	if(req.session.user){
  	res.render("chat");
  }else{
  	res.redirect('/')
  }
	console.log("fff:",req.session.user,req.session.num);
})
module.exports = router;
