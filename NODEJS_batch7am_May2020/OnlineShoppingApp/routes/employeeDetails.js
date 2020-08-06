var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  //res.render('index', { title: 'Express 123' });
	var data = {
  		empname: 'Raj',
  		age: 30,
  		gender: 'Male',
  		location: 'Hyderabad'
    };

  	//res.send(data);

  	res.render("emppage", data)
});

module.exports = router;
