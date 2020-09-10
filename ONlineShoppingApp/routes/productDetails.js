var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	var productData = {
		productDetails: [
			{
				name: 'Laptop',
				price: '$3000',
				manu: 'Samsung',
				image: 'https://images.indianexpress.com/2020/07/Dell-G5-15-2020-fb.jpg',
				discount: '12%'
			},
			{
				name: 'Mobile',
				price: '$2500',
				manu: 'HTC',
				image: 'https://img.etimg.com/thumb/msid-71641804,width-1200,height-900/industry/services/retail/ecommerce-may-soon-lose-mobile-exclusivity.jpg',
				discount: '2%'
			}
		]
	};
	productData = JSON.stringify(productData);
	res.send(productData);
});

module.exports = router;
