var express = require('express');
var router = express.Router();
//var multer = require("multer");
/*
var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './public/uploads');
  },
  filename: function (req, file, callback) {
     filename = file.fieldname + '-' + Date.now() + '.jpg';
    callback(null, file.fieldname + '-' + Date.now() + '.jpg');
  }
});*/

//var upload = multer({ storage : storage}).single('prodImage');
/* GET home page. */
router.post('/', function(req, res) {
	var data = {};
	data.msg = "success";
	/*upload(req, res, function(err) {
        if (err) {
          console.log(err);
            return res.end("Error uploading file.");
        } else {
        var data = {
            msg: "success",
            imageUrl: '/uploads/' + filename
          }
          res.send(JSON.stringify(data));
        }
    });*/

    res.send(JSON.stringify(data));
});

module.exports = router;

