var express = require("express");
const { route } = require(".");
var router = express.Router();

router.get("/", function(req, res){
    var data = {
        name: 'RAj',
        age: 20
    };

    data = JSON.stringify(data);

    res.send(data);
});


module.exports = router;