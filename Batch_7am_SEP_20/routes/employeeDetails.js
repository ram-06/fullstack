var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  var data = {
  	empname: "Prasad",
  	age: 50,
  	gender: 'Male',
  	location: 'Hyderabad',
  	dep: "Faculty"
  };

  //data = JSON.stringify(data);
  //res.send(data);

  res.render("employeeDetails", data);
});

module.exports = router;

