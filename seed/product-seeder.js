var Product=require('../models/product');

var mongoose= require('mongoose');

mongoose.connect("mongodb://localhost:27017/Shopping", { useNewUrlParser: true });


var products= [
			new Product({
			imagePath: '/images/ipad.jpg',
			title: 'ipad5',
			description: 'good gadget5',
			price: 90
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