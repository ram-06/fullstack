var express = require("express");
var router = express.Router();

router.get('/', function (req, res, next) {
    var data = {
        msg: "valid Details"
    };
    data = JSON.stringify(data);
    response.send(data);
});
module.exports = router;