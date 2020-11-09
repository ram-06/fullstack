var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("frm webservice");
  var data = {
    "pData" :[
        {
            "name": "Laptop",
            "price": "$ 3000",
            "manu": "Samsung",
            "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqfzLmC4Rg0UE_nfCHAW3plVHctLmNjKLhtA&usqp=CAU"
        },
        {
            "name": "Mobile",
            "price": "$ 3000",
            "manu": "Samsung",
            "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqfzLmC4Rg0UE_nfCHAW3plVHctLmNjKLhtA&usqp=CAU"
        },
        {
            "name": "Book",
            "price": "$ 3000",
            "manu": "Samsung",
            "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqfzLmC4Rg0UE_nfCHAW3plVHctLmNjKLhtA&usqp=CAU"
        },
        {
            "name": "Pendrive",
            "price": "$ 3000",
            "manu": "Samsung",
            "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqfzLmC4Rg0UE_nfCHAW3plVHctLmNjKLhtA&usqp=CAU"
        }
    ]
};

  data = JSON.stringify(data);

  setTimeout(function(){
    res.send(data);
  }, 5000)
  

});

module.exports = router;
