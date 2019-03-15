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
	response.render("homePage", {
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
			name: 'Fresh ',
			price: "10.99"}, 
			{image: 'http://klbtheme.com/qualis/wp-content/uploads/2018/12/p7.jpg',
			name: 'Fresh ',
			price: "14.99"}, 
			{image: 'http://klbtheme.com/qualis/wp-content/uploads/2018/12/p11.jpg',
			name: 'Fresh ',
			price: "16.99"}, 
		],
		footerListOne: [
			{name: 'Blog', link: 'https://www.google.com/'},
			{name: 'FAQs', link: 'https://www.google.com/'},
			{name: 'Payment', link: 'https://www.google.com/'},
			{name: 'Shipment', link: 'https://www.google.com/'},
			{name: 'Where is my order?', link: 'https://www.google.com/'},
			{name: 'Return Policy', link: 'https://www.google.com/'},
		],
		footerListTwo: [
			{name: 'Your Account', link: 'https://www.google.com/'},
			{name: 'Information', link: 'https://www.google.com/'},
			{name: 'Addresses', link: 'https://www.google.com/'},
			{name: 'Discount', link: 'https://www.google.com/'},
			{name: 'Orders History', link: 'https://www.google.com/'},
			{name: 'Order Tracking', link: 'https://www.google.com/'},
		],
		footerListThree: [
			{name: 'Site Map', link: 'https://www.google.com/'},
			{name: 'Search Terms', link: 'https://www.google.com/'},
			{name: 'Advanced Search', link: 'https://www.google.com/'},
			{name: 'About Us', link: 'https://www.google.com/'},
			{name: 'Contact Us', link: 'https://www.google.com/'},
			{name: 'Suppliers', link: 'https://www.google.com/'},
		],
		latestNew: [
			{image:'http://klbtheme.com/qualis/wp-content/uploads/2018/12/blog-img1-391x207.jpg' ,header:'Powerful and flexible premium Ecommerce themes' ,paragraph:'Fusce ac pharetra urna. Duis non lacus sit amet lacus interdum facilisis sed non est. Ut mi metus, semper eu'},
			{image:'http://klbtheme.com/qualis/wp-content/uploads/2018/12/blog-img2-391x207.jpg' ,header:'Awesome template with lot’s of features on the board!' ,paragraph:'Fusce ac pharetra urna. Duis non lacus sit amet lacus interdum facilisis sed non est. Ut mi metus, semper eu'},
			{image:'http://klbtheme.com/qualis/wp-content/uploads/2019/01/blog-img3-391x207.jpg' ,header:'Premium template with unlimited colours, and fully Customizable' ,paragraph:'Fusce ac pharetra urna. Duis non lacus sit amet lacus interdum facilisis sed non est. Ut mi metus, semper eu'},
		]
	});
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


app.get("/footer", function (request, response) {
	response.render("footer", {			
		footerListOne: [
		{name: 'Blog', link: 'https://www.google.com/'},
		{name: 'FAQs', link: 'https://www.google.com/'},
		{name: 'Payment', link: 'https://www.google.com/'},
		{name: 'Shipment', link: 'https://www.google.com/'},
		{name: 'Where is my order?', link: 'https://www.google.com/'},
		{name: 'Return Policy', link: 'https://www.google.com/'},
	],
	footerListTwo: [
		{name: 'Your Account', link: 'https://www.google.com/'},
		{name: 'Information', link: 'https://www.google.com/'},
		{name: 'Addresses', link: 'https://www.google.com/'},
		{name: 'Discount', link: 'https://www.google.com/'},
		{name: 'Orders History', link: 'https://www.google.com/'},
		{name: 'Order Tracking', link: 'https://www.google.com/'},
	],
	footerListThree: [
		{name: 'Site Map', link: 'https://www.google.com/'},
		{name: 'Search Terms', link: 'https://www.google.com/'},
		{name: 'Advanced Search', link: 'https://www.google.com/'},
		{name: 'About Us', link: 'https://www.google.com/'},
		{name: 'Contact Us', link: 'https://www.google.com/'},
		{name: 'Suppliers', link: 'https://www.google.com/'},
	],
	});
});

app.get("/latestNew", function (request, response) {
	response.render("latestNew", {
		latestNew: [
			{image:'http://klbtheme.com/qualis/wp-content/uploads/2018/12/blog-img1-391x207.jpg' ,header:'Powerful and flexible premium Ecommerce themes' ,paragraph:'Fusce ac pharetra urna. Duis non lacus sit amet lacus interdum facilisis sed non est. Ut mi metus, semper eu'},
			{image:'http://klbtheme.com/qualis/wp-content/uploads/2018/12/blog-img2-391x207.jpg' ,header:'Awesome template with lot’s of features on the board!' ,paragraph:'Fusce ac pharetra urna. Duis non lacus sit amet lacus interdum facilisis sed non est. Ut mi metus, semper eu'},
			{image:'http://klbtheme.com/qualis/wp-content/uploads/2019/01/blog-img3-391x207.jpg' ,header:'Premium template with unlimited colours, and fully Customizable' ,paragraph:'Fusce ac pharetra urna. Duis non lacus sit amet lacus interdum facilisis sed non est. Ut mi metus, semper eu'},
		]
	});
});