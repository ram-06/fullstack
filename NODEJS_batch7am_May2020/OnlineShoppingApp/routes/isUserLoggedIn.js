var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  var data = {};
  if (req.query.killSession) {
  	req.session.userLoggedIn = false;
  }

  if (req.session.userLoggedIn)  {
  	data.status = req.session.userLoggedIn;
  } else {
  	data.status = false;
  }
  data = JSON.stringify(data);
  res.send(data);
});

module.exports = router;
