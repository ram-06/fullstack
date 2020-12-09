var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var data = {
		pdata: [
			{
				name: 'Mobile',
				price: '$2340',
				manu: 'Samsung',
				discount: '3%',
				image: 'https://cdn.pocket-lint.com/r/s/1200x/assets/images/148375-phones-feature-foldable-phones-image1-158skhnyrl.jpg'
			},
			{
				name: 'Headset',
				price: '$Sony',
				manu: 'Samsung',
				discount: '10%',
				image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDt_KJYnLp-2ysbTpMTDTGux6WE-IqHXy7Tw&usqp=CAU'
			},
			{
				name: 'Hardisk',
				price: '$2000',
				manu: 'WD',
				discount: '3%',
				image: 'https://media.istockphoto.com/photos/external-hard-disk-with-cable-isolated-on-white-picture-id1058762968?k=6&m=1058762968&s=612x612&w=0&h=9I9LFCeGoMAAW_-4fGaSm0bsrucNUq6GIpIDlJkcrPI='
			},
			{
				name: 'Mouse',
				price: '$10',
				manu: 'Logitech',
				discount: '1%',
				image: 'https://www.reliancedigital.in/medias/Logitech-M221-Silent-Wireless-Optical-Mouse-Red-491320266-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNjcxOTh8aW1hZ2UvanBlZ3xpbWFnZXMvaDlmL2g0NS84OTMwODcwNDkzMjE0LmpwZ3w4NDZiMzk5MmU5MGRhOGFjMzk3NTA0NTRiOTc2MGU1NDE3YTljZDIzYzRmNzAxZjFmOTNmM2RmYjYyYjZjZjBj'
			},
			{
				name: 'Keyboard',
				price: '$200',
				manu: 'Intel',
				discount: '10%',
				image: 'https://images-na.ssl-images-amazon.com/images/I/71TBg4r1oNL._AC_SY450_.jpg'
			},
			{
				name: 'Pendrive',
				price: '$12',
				manu: 'Scandisk',
				discount: '34%',
				image: 'https://images.jdmagicbox.com/quickquotes/images_main/b07prz69tq-alketron-twister-128-gb-pen-drive-128-gb-pendrives-flashdrives-black-163285520-sm0e6.jpg'
			}
		]
	};

	data = JSON.stringify(data);

	res.send(data);

});

module.exports = router;
