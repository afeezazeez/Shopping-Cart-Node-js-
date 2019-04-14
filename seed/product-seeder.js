var Product=require('../models/product');

var mongoose= require('mongoose');

mongoose.connect("mongodb://localhost:27017/Shopping", { useNewUrlParser: true });


var products= [
			new Product({
			imagePath: '/images/ipad.jpg',
			title: 'ipad1',
			description: 'good gadget1',
			price: 10
		 }),

			new Product({
			imagePath: '/images/ipad.jpg',
			title: 'ipad2',
			description: 'good gadget2',
			price: 20
		 }),

			new Product({
			imagePath: '/images/ipad.jpg',
			title: 'ipad3',
			description: 'good gadget3',
			price: 10
		 }),

			new Product({
			imagePath: '/images/ipad.jpg',
			title: 'ipad4',
			description: 'good gadget4',
			price: 10
		 }),
];

var done=0;
for(var i=0;i<products.length;i++){
	console.log(products[i]);
	products[i].save(function(err,result){
	  done++;
	  if (done==products.length) {
	  	 exit();
	  }		
	});
}
function exit(){
mongoose.disconnect();
}