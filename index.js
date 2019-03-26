var express = require('express');
var app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');
app.listen('3000', function () {
	console.log(" listening port 3000!");
});



var itemList = [{
		name: 'Fruit juices'
	},
	{
		name: 'Vegetable Juices'
	},
	{
		name: 'Smoothies'
	},
	{
		name: 'Protein Shakes'
	},
	{
		name: 'Winter Menu'
	},
	{
		name: 'Chocolate Juices'
	},
	{
		name: 'Mock Tails'
	},
]
var productList = [{
		image: 'http://klbtheme.com/qualis/wp-content/uploads/2018/12/p12.jpg',
		name: 'Fresh Organic Mustard Leaves',
		price: "5.99"
	},
	{
		image: 'http://klbtheme.com/qualis/wp-content/uploads/2018/12/p16.jpg',
		name: 'Fresh Red Seedless',
		price: "6.99"
	},
	{
		image: 'http://klbtheme.com/qualis/wp-content/uploads/2018/12/p9.jpg',
		name: 'Native Organic Carrot',
		price: "7.99"
	},
	{
		image: 'http://klbtheme.com/qualis/wp-content/uploads/2018/12/p4.jpg',
		name: 'Native Organic Cucumber',
		price: "14.99"
	},
	{
		image: 'http://klbtheme.com/qualis/wp-content/uploads/2018/12/p3.jpg',
		name: 'Organic Grape Tomatoes',
		price: "6.99"
	},
	{
		image: 'http://klbtheme.com/qualis/wp-content/uploads/2018/12/p10.jpg',
		name: 'Organic Green Bell Pepper',
		price: "9.99"
	},
	{
		image: 'http://klbtheme.com/qualis/wp-content/uploads/2018/12/p5.jpg',
		name: 'Organic Green Cabbage ',
		price: "10.99"
	},
	{
		image: 'http://klbtheme.com/qualis/wp-content/uploads/2018/12/p7.jpg',
		name: 'Organic Red Delicious Apple ',
		price: "14.99"
	},
	{
		image: 'http://klbtheme.com/qualis/wp-content/uploads/2018/12/p11.jpg',
		name: 'Organic Strawberry ',
		price: "16.99"
	},
]

var productListTwo = [{
		image: 'img/Avocado.jpg',
		name: 'Moroccan Avocado Smoothie ',
		price: "9.99"
	},
	{
		image: 'img/Coconut.jpg',
		name: 'Coconut Smoothie ',
		price: "3.99"
	},
	{
		image: 'img/Dragon Fruit.jpg',
		name: 'Dragon Fruit Smoothie ',
		price: "6.99"
	},
	{
		image: 'img/Spinack.jpg',
		name: 'Straight Up  ',
		price: "6.99"
	},
	{
		image: 'img/the Other Beet One.jpg',
		name: 'The Other Beet One ',
		price: "6.99"
	},
	{
		image: 'img/Eastern-Sunset.jpg',
		name: 'Eastern Sunset ',
		price: "6.99"
	},
]
var footerListOne = [{
		name: 'Blog',
		link: 'https://www.google.com/'
	},
	{
		name: 'FAQs',
		link: 'https://www.google.com/'
	},
	{
		name: 'Payment',
		link: 'https://www.google.com/'
	},
	{
		name: 'Shipment',
		link: 'https://www.google.com/'
	},
	{
		name: 'Where is my order?',
		link: 'https://www.google.com/'
	},
	{
		name: 'Return Policy',
		link: 'https://www.google.com/'
	},
]
var footerListTwo = [{
		name: 'Your Account',
		link: 'https://www.google.com/'
	},
	{
		name: 'Information',
		link: 'https://www.google.com/'
	},
	{
		name: 'Addresses',
		link: 'https://www.google.com/'
	},
	{
		name: 'Discount',
		link: 'https://www.google.com/'
	},
	{
		name: 'Orders History',
		link: 'https://www.google.com/'
	},
	{
		name: 'Order Tracking',
		link: 'https://www.google.com/'
	},
]
var footerListThree = [{
		name: 'Site Map',
		link: 'https://www.google.com/'
	},
	{
		name: 'Search Terms',
		link: 'https://www.google.com/'
	},
	{
		name: 'Advanced Search',
		link: 'https://www.google.com/'
	},
	{
		name: 'About Us',
		link: 'https://www.google.com/'
	},
	{
		name: 'Contact Us',
		link: 'https://www.google.com/'
	},
	{
		name: 'Suppliers',
		link: 'https://www.google.com/'
	},
]
var latestNew = [{
		image: 'http://klbtheme.com/qualis/wp-content/uploads/2018/12/blog-img1-391x207.jpg',
		header: 'Powerful and flexible premium Ecommerce themes',
		paragraph: 'Fusce ac pharetra urna. Duis non lacus sit amet lacus interdum facilisis sed non est. Ut mi metus, semper eu'
	},
	{
		image: 'http://klbtheme.com/qualis/wp-content/uploads/2018/12/blog-img2-391x207.jpg',
		header: 'Awesome template with lot’s of features on the board!',
		paragraph: 'Fusce ac pharetra urna. Duis non lacus sit amet lacus interdum facilisis sed non est. Ut mi metus, semper eu'
	},
	{
		image: 'http://klbtheme.com/qualis/wp-content/uploads/2019/01/blog-img3-391x207.jpg',
		header: 'Premium template with unlimited colours, and fully Customizable',
		paragraph: 'Fusce ac pharetra urna. Duis non lacus sit amet lacus interdum facilisis sed non est. Ut mi metus, semper eu'
	},
]


app.get("/homePage", function (request, response) {
	response.render("homePage", {
		itemList,
		productList,
		productListTwo,
		footerListOne,
		footerListTwo,
		footerListThree,
		latestNew
	});
});

app.get("/product-grid", function (request, response) {
	response.render("product-grid", {
		itemList,
		productList,
		footerListOne,
		footerListTwo,
		footerListThree
	});
});

app.get("/product-gridTwo", function (request, response) {
	response.render("product-gridTwo", {
		itemList,
		productListTwo,
		footerListOne,
		footerListTwo,
		footerListThree
	});
});


app.get("/footer", function (request, response) {
	response.render("components/footer", {
		footerListOne,
		footerListTwo,
		footerListThree,
	});
});

app.get("/latestNew", function (request, response) {
	response.render("components/latestNew", {
		latestNew
	});
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

app.get("/contactUs", function (request, response) {
	response.render("contactUs", {
		footerListOne,
		footerListTwo,
		footerListThree,
		latestNew
	});
});

app.get("/fixedHeader", function (request, response) {
	response.render("components/fixedHeader");
});

app.get("/head", function (request, response) {
	response.render("common/head");
});

app.get("/sliderHomePage", function (request, response) {
	response.render("components/sliderHomePage");
});

app.get("/aboutUs", function (request, response) {
	response.render("aboutUs", {
		footerListOne,
		footerListTwo,
		footerListThree
	});
});

app.get("/checkOut", function (request, response) {
	response.render("checkOut", {
		footerListOne,
		footerListTwo,
		footerListThree,
		latestNew
	});
});


app.get("/product-information", function (request, response) {
	response.render("product-information", {
		footerListOne,
		footerListTwo,
		footerListThree,
		latestNew
	});
});