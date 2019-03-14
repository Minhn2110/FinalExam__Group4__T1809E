var express = require('express');

var app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', './views');


app.listen('3000', function () {
	console.log(" listening port 3000!");
});

app.get("/", function (request, response) {
	response.render("index");
});


app.get("/about", function (request, response) {
	response.render("about");
});

app.get("/contact", function (request, response) {
	response.render("contact");
});


app.get("/cart", function (request, response) {
	response.render("cart");
});


app.get("/fruit", function (request, response) {
	response.render("fruit");
});

app.get("/contactUs", function (request, response) {
	response.render("contactUs");
});

app.get("/fixedHeader", function (request, response) {
	response.render("fixedHeader");
});

app.get("/homePage", function (request, response) {
	response.render("homePage");
});

app.get("/product-grid", function (request, response) {
	response.render("product-grid", {
			itemList: [
				{name: 'Bean'},
				{name: 'Orange'},
				{name: 'Orange'},
				{name: 'Orange'},
				{name: 'Orange'},
				{name: 'Orange'},
				{name: 'Orange'},
				{name: 'Orange'}
			],
			productList: [
				{image: 'http://klbtheme.com/qualis/wp-content/uploads/2018/12/p12.jpg',
				name: 'Orange',
				price: "5.99"}, 
				{image: 'http://klbtheme.com/qualis/wp-content/uploads/2018/12/p16.jpg',
				name: 'Grape',
				price: "6.99"}, 
				{image: 'http://klbtheme.com/qualis/wp-content/uploads/2018/12/p9.jpg',
				name: 'Carrot',
				price: "7.99"}, 
				{image: 'http://klbtheme.com/qualis/wp-content/uploads/2018/12/p4.jpg',
				name: 'Cucumber',
				price: "14.99"}, 
				{image: 'http://klbtheme.com/qualis/wp-content/uploads/2018/12/p3.jpg',
				name: 'Tomatoes',
				price: "6.99"}, 
				{image: 'http://klbtheme.com/qualis/wp-content/uploads/2018/12/p10.jpg',
				name: 'Pepper',
				price: "9.99"}, 
				{image: 'http://klbtheme.com/qualis/wp-content/uploads/2018/12/p5.jpg',
				name: 'Fresh Organic Mustard Leaves',
				price: "10.99"}, 
				{image: 'http://klbtheme.com/qualis/wp-content/uploads/2018/12/p7.jpg',
				name: 'Fresh Organic Mustard Leaves',
				price: "14.99"}, 
				{image: 'http://klbtheme.com/qualis/wp-content/uploads/2018/12/p11.jpg',
				name: 'Fresh Organic Mustard Leaves',
				price: "16.99"}, 
			]
		}
	);
});