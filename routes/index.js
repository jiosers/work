var express = require('express');
var router = express.Router();

/* GET home page. */
let users={"june":"123456"};
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/login",(req,res,next)=>{
	console.log("fdafa",req.params);
	let {name,password}=req.params;
	let state=0;
	if(users.name&&users.name===password){
		req.session.user={name};
		state=1;
	}
	res.send({state})
})
module.exports = router;
