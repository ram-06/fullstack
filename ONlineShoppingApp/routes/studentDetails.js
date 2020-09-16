var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var sData = {
    name: "Raj",
    age: 20,
    gender: "Male",
    location: "Hyderabad"
  };

  res.render("studentDetails", sData);
  // res.send(Data);
});

module.exports = router;
