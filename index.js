// var express = require('express');
// var bodyParser = require('body-parser');
// var app = express();

// //multer vs cookies
// var multer  = require('multer');
// var upload = multer({ dest: './public/uploads/' });
// var cookieParser = require('cookie-parser');
// app.use(cookieParser());
// const shortid = require('shortid');


// const low = require('lowdb');
// const FileSync = require('lowdb/adapters/FileSync');
// const adapter = new FileSync('db.json');
// const db = low(adapter);
// db.defaults({ productList: [], itemList: [], footerListOne: [], footerListTwo: [],
// footerListThree: [], latestNew: [] ,footerListOne: [] ,footerListTwo: [], 
// footerListThree: [] ,latestNew: [] ,admin: [] ,customers: []    })
//   .write();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('public'));
// app.set('view engine', 'ejs');
// app.set('views', './views');


// app.listen('3000', function () {
// 	console.log(" listening port 3000!");
// });

// //admin
// app.get("/admin",function (request, response) {
// 	// response.redirect('/admin/login')
// 	if(!request.cookies.admin){
// 		response.redirect("/login");
// 	};

// 	response.render("admin",{

// 		productList: db.get('productList').value(),
// 		customers: db.get('customers').value()
// 	});
// });
// // remove product
// app.get("/remove/:id", function(request, response){
// 	var id = request.params.id;
// 	db.get('productList').remove({ id: id }).write();
// 	response.redirect("/admin");
// });
// //edit product
// // app.post("/edit", function(request, response){
// // 	// var product = db.get('productList').filter({id: id}).value();
// // 	var product = db.get('productList').write();
// // 	product.name = request.body.name.write();
// // 	console.log(request.body);
// // 	// // response.render("edit");
// // });

// //upload product
// app.post("/addproduct",upload.single('avatar'), function (request, response) {
// 	// response.redirect('/admin/login')
// 	request.body.id = shortid.generate();
// 	if (request.file.path.indexOf('\\') !== -1) {
// 		request.body.image = request.file.path.split('\\').slice(1).join('/');
// 	}else{
// 			request.body.image = request.file.path.split('/').slice(1).join('/');
// 	};
// 	db.get('productList').push(request.body).write();
// 	response.redirect('/admin')
// });

// app.get("/", function (request, response) {
// 	response.render("index");
// });


// app.get("/about", function (request, response) {
// 	response.render("about");
// });

// app.get("/contact", function (request, response) {
// 	response.render("contact");
// });
// app.get("/search", function (request, response) {
// 	var q = request.query.q;
//    	var searchProduct = db.get('productList').value().filter(function(product) {
//     return product.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
//  	 });
// 	response.render("product-grid",{
// 		itemList: db.get('itemList').value(),
// 		productList: searchProduct
// 	});
// });
// app.get("/login", function (request, response) {
// 	response.render("login");
// });
// app.post("/admin/login", function (request, response) {
// 	var userName = request.body.userName;
//   	var password = request.body.password;
//   	var admin = db.get('admin').find({ userName: userName }).value();
//   	if (!admin) {
//   	response.render('/login'); 		
//   		return ;
//   	}
//   	if (!admin) {
//   	response.render('/login'); 		
//   		return ;
//   	}
// 	if (admin.password !== password) {
// 	  	response.render('/login'); 		
// 	  		return ;
// 	  	};

//   	response.cookie('admin', admin.id);
//   	response.redirect('/admin');
// });



// var itemList = [{
// 		name: 'Fruit juices'
// 	},
// 	{
// 		name: 'Vegetable Juices'
// 	},
// 	{
// 		name: 'Smoothies'
// 	},
// 	{
// 		name: 'Protein Shakes'
// 	},
// 	{
// 		name: 'Winter Menu'
// 	},
// 	{
// 		name: 'Chocolate Juices'
// 	},
// 	{
// 		name: 'Mock Tails'
// 	},
// ]
// var productList = [{
// 		image: 'http://klbtheme.com/qualis/wp-content/uploads/2018/12/p12.jpg',
// 		name: 'Fresh Organic Mustard Leaves',
// 		price: "5.99"
// 	},
// 	{
// 		image: 'http://klbtheme.com/qualis/wp-content/uploads/2018/12/p16.jpg',
// 		name: 'Fresh Red Seedless',
// 		price: "6.99"
// 	},
// 	{
// 		image: 'http://klbtheme.com/qualis/wp-content/uploads/2018/12/p9.jpg',
// 		name: 'Native Organic Carrot',
// 		price: "7.99"
// 	},
// 	{
// 		image: 'http://klbtheme.com/qualis/wp-content/uploads/2018/12/p4.jpg',
// 		name: 'Native Organic Cucumber',
// 		price: "14.99"
// 	},
// 	{
// 		image: 'http://klbtheme.com/qualis/wp-content/uploads/2018/12/p3.jpg',
// 		name: 'Organic Grape Tomatoes',
// 		price: "6.99"
// 	},
// 	{
// 		image: 'http://klbtheme.com/qualis/wp-content/uploads/2018/12/p10.jpg',
// 		name: 'Organic Green Bell Pepper',
// 		price: "9.99"
// 	},
// 	{
// 		image: 'http://klbtheme.com/qualis/wp-content/uploads/2018/12/p5.jpg',
// 		name: 'Organic Green Cabbage ',
// 		price: "10.99"
// 	},
// 	{
// 		image: 'http://klbtheme.com/qualis/wp-content/uploads/2018/12/p7.jpg',
// 		name: 'Organic Red Delicious Apple ',
// 		price: "14.99"
// 	},
// 	{
// 		image: 'http://klbtheme.com/qualis/wp-content/uploads/2018/12/p11.jpg',
// 		name: 'Organic Strawberry ',
// 		price: "16.99"
// 	},
// ]

// var productListTwo = [{
// 		image: 'img/Avocado.jpg',
// 		name: 'Moroccan Avocado Smoothie ',
// 		price: "9.99"
// 	},
// 	{
// 		image: 'img/Coconut.jpg',
// 		name: 'Coconut Smoothie ',
// 		price: "3.99"
// 	},
// 	{
// 		image: 'img/Dragon Fruit.jpg',
// 		name: 'Dragon Fruit Smoothie ',
// 		price: "6.99"
// 	},
// 	{
// 		image: 'img/Spinack.jpg',
// 		name: 'Straight Up  ',
// 		price: "6.99"
// 	},
// 	{
// 		image: 'img/the Other Beet One.jpg',
// 		name: 'The Other Beet One ',
// 		price: "6.99"
// 	},
// 	{
// 		image: 'img/Eastern-Sunset.jpg',
// 		name: 'Eastern Sunset ',
// 		price: "6.99"
// 	},
// ]
// var footerListOne = [{
// 		name: 'Blog',
// 		link: 'https://www.google.com/'
// 	},
// 	{
// 		name: 'FAQs',
// 		link: 'https://www.google.com/'
// 	},
// 	{
// 		name: 'Payment',
// 		link: 'https://www.google.com/'
// 	},
// 	{
// 		name: 'Shipment',
// 		link: 'https://www.google.com/'
// 	},
// 	{
// 		name: 'Where is my order?',
// 		link: 'https://www.google.com/'
// 	},
// 	{
// 		name: 'Return Policy',
// 		link: 'https://www.google.com/'
// 	},
// ]
// var footerListTwo = [{
// 		name: 'Your Account',
// 		link: 'https://www.google.com/'
// 	},
// 	{
// 		name: 'Information',
// 		link: 'https://www.google.com/'
// 	},
// 	{
// 		name: 'Addresses',
// 		link: 'https://www.google.com/'
// 	},
// 	{
// 		name: 'Discount',
// 		link: 'https://www.google.com/'
// 	},
// 	{
// 		name: 'Orders History',
// 		link: 'https://www.google.com/'
// 	},
// 	{
// 		name: 'Order Tracking',
// 		link: 'https://www.google.com/'
// 	},
// ]
// var footerListThree = [{
// 		name: 'Site Map',
// 		link: 'https://www.google.com/'
// 	},
// 	{
// 		name: 'Search Terms',
// 		link: 'https://www.google.com/'
// 	},
// 	{
// 		name: 'Advanced Search',
// 		link: 'https://www.google.com/'
// 	},
// 	{
// 		name: 'About Us',
// 		link: 'https://www.google.com/'
// 	},
// 	{
// 		name: 'Contact Us',
// 		link: 'https://www.google.com/'
// 	},
// 	{
// 		name: 'Suppliers',
// 		link: 'https://www.google.com/'
// 	},
// ]
// var latestNew = [{
// 		image: 'http://klbtheme.com/qualis/wp-content/uploads/2018/12/blog-img1-391x207.jpg',
// 		header: 'Powerful and flexible premium Ecommerce themes',
// 		paragraph: 'Fusce ac pharetra urna. Duis non lacus sit amet lacus interdum facilisis sed non est. Ut mi metus, semper eu'
// 	},
// 	{
// 		image: 'http://klbtheme.com/qualis/wp-content/uploads/2018/12/blog-img2-391x207.jpg',
// 		header: 'Awesome template with lot’s of features on the board!',
// 		paragraph: 'Fusce ac pharetra urna. Duis non lacus sit amet lacus interdum facilisis sed non est. Ut mi metus, semper eu'
// 	},
// 	{
// 		image: 'http://klbtheme.com/qualis/wp-content/uploads/2019/01/blog-img3-391x207.jpg',
// 		header: 'Premium template with unlimited colours, and fully Customizable',
// 		paragraph: 'Fusce ac pharetra urna. Duis non lacus sit amet lacus interdum facilisis sed non est. Ut mi metus, semper eu'
// 	},
// ]


// //admin
// app.get("/admin",function (request, response) {
// 	// response.redirect('/admin/login')
// 	if(!request.cookies.admin){
// 		response.redirect("/login");
// 	};

// 	response.render("admin",{

// 		productList: db.get('productList').value(),
// 		customers: db.get('customers').value()
// 	});
// });
// // remove product
// app.get("/remove/:id", function(request, response){
// 	var id = request.params.id;
// 	db.get('productList').remove({ id: id }).write();
// 	response.redirect("/admin");
// });
// //edit product
// // app.post("/edit", function(request, response){
// // 	// var product = db.get('productList').filter({id: id}).value();
// // 	var product = db.get('productList').write();
// // 	product.name = request.body.name.write();
// // 	console.log(request.body);
// // 	// // response.render("edit");
// // });

// //upload product
// app.post("/addproduct",upload.single('avatar'), function (request, response) {
// 	// response.redirect('/admin/login')
// 	request.body.id = shortid.generate();
// 	if (request.file.path.indexOf('\\') !== -1) {
// 		request.body.image = request.file.path.split('\\').slice(1).join('/');
// 	}else{
// 			request.body.image = request.file.path.split('/').slice(1).join('/');
// 	};
// 	db.get('productList').push(request.body).write();
// 	response.redirect('/admin')
// });
// app.get("/search", function (request, response) {
// 	var q = request.query.q;
//    	var searchProduct = db.get('productList').value().filter(function(product) {
//     return product.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
//  	 });
// 	response.render("product-grid",{
// 		itemList: db.get('itemList').value(),
// 		productList: searchProduct
// 	});
// });
// app.get("/login", function (request, response) {
// 	response.render("login");
// });
// app.post("/admin/login", function (request, response) {
// 	var userName = request.body.userName;
//   	var password = request.body.password;
//   	var admin = db.get('admin').find({ userName: userName }).value();
//   	if (!admin) {
//   	response.render('/login'); 		
//   		return ;
//   	}
//   	if (!admin) {
//   	response.render('/login'); 		
//   		return ;
//   	}
// 	if (admin.password !== password) {
// 	  	response.render('/login'); 		
// 	  		return ;
// 	  	};

//   	response.cookie('admin', admin.id);
//   	response.redirect('/admin');
// });



// app.get("/homePage", function (request, response) {
// 	response.render("homePage", {
// 		itemList,
// 		productList,
// 		productListTwo,
// 		footerListOne,
// 		footerListTwo,
// 		footerListThree,
// 		latestNew
// 	});
// });

// app.get("/product-grid", function (request, response) {
// 	response.render("product-grid", {
// 		itemList,
// 		productList,
// 		footerListOne,
// 		footerListTwo,
// 		footerListThree
// 	});
// });

// app.get("/product-gridTwo", function (request, response) {
// 	response.render("product-gridTwo", {
// 		itemList,
// 		productListTwo,
// 		footerListOne,
// 		footerListTwo,
// 		footerListThree
// 	});
// });


// app.get("/footer", function (request, response) {
// 	response.render("components/footer", {
// 		footerListOne,
// 		footerListTwo,
// 		footerListThree,
// 	});
// });

// app.get("/latestNew", function (request, response) {
// 	response.render("components/latestNew", {
// 		latestNew
// 	});
// });


// app.get("/", function (request, response) {
// 	response.render("index");
// });


// app.get("/about", function (request, response) {
// 	response.render("about");
// });

// app.get("/contact", function (request, response) {
// 	response.render("contact");
// });


// app.get("/cart", function (request, response) {
// 	response.render("cart");
// });

// app.get("/contactUs", function (request, response) {
// 	response.render("contactUs", {
// 		footerListOne,
// 		footerListTwo,
// 		footerListThree,
// 		latestNew
// 	});
// });

// app.get("/fixedHeader", function (request, response) {
// 	response.render("components/fixedHeader");
// });

// app.get("/head", function (request, response) {
// 	response.render("common/head");
// });

// app.get("/sliderHomePage", function (request, response) {
// 	response.render("components/sliderHomePage");
// });

// app.get("/aboutUs", function (request, response) {
// 	response.render("aboutUs", {
// 		footerListOne,
// 		footerListTwo,
// 		footerListThree
// 	});
// });

// app.get("/checkOut", function (request, response) {
// 	response.render("checkOut", {
// 		footerListOne,
// 		footerListTwo,
// 		footerListThree,
// 		latestNew
// 	});
// });


// app.get("/product-information", function (request, response) {
// 	response.render("product-information", {
// 		footerListOne,
// 		footerListTwo,
// 		footerListThree,
// 		latestNew
// 	});
// });



var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//multer vs cookies
var multer  = require('multer');
var upload = multer({ dest: './public/uploads/' });
var cookieParser = require('cookie-parser');
app.use(cookieParser());
const shortid = require('shortid');


const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);
db.defaults({ productList: [], itemList: [],footerListOne: [], footerListTwo: [],
footerListThree: [], latestNew: [] ,admin: [] ,customers: []  ,  productListTwo: [], productListThree: []  })
  .write();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');


app.listen('3000', function () {
	console.log(" listening port 3000!");
});

//admin
app.get("/admin",function (request, response) {
	// response.redirect('/admin/login')
	if(!request.cookies.admin){
		response.redirect("/login");
	};

	response.render("admin",{

		productList: db.get('productList').value(),
		customers: db.get('customers').value()
	});
});
// remove product
app.get("/remove/:id", function(request, response){
	var id = request.params.id;
	db.get('productList').remove({ id: id }).write();
	response.redirect("/admin");
});
//edit product
// app.post("/edit", function(request, response){
// 	// var product = db.get('productList').filter({id: id}).value();
// 	var product = db.get('productList').write();
// 	product.name = request.body.name.write();
// 	console.log(request.body);
// 	// // response.render("edit");
// });

//upload product
app.post("/addproduct",upload.single('avatar'), function (request, response) {
	// response.redirect('/admin/login')
	request.body.id = shortid.generate();
	if (request.file.path.indexOf('\\') !== -1) {
		request.body.image = request.file.path.split('\\').slice(1).join('/');
	}else{
			request.body.image = request.file.path.split('/').slice(1).join('/');
	};
	db.get('productList').push(request.body).write();
	response.redirect('/admin')
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
app.get("/search", function (request, response) {
	var q = request.query.q;
   	var searchProduct = db.get('productList').value().filter(function(product) {
    return product.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
 	 });
	response.render("product-grid",{
		itemList: db.get('itemList').value(),
		footerListTwo: db.get('footerListTwo').value(),
		footerListOne: db.get('footerListOne').value(),
		footerListThree: db.get('footerListThree').value(),
		productList: searchProduct
	});
});
app.get("/search-product/:id", function (request, response) {
	var id = request.params.id;
	var product = db.get('productList').find({ id: id }).value();
	console.log(product);
	response.render("product-information", {
			itemList: db.get('itemList').value(),
			productList: product,
			footerListOne: db.get('footerListOne').value(),
			footerListTwo: db.get('footerListTwo').value(),
			footerListThree: db.get('footerListThree').value(),
			latestNew: db.get('latestNew').value()
		}
	);
});

app.get("/product-information", function (request, response) {
	response.render("product-information", {
			itemList: db.get('itemList').value(),
			productList: db.get('productList').value(),
			footerListOne: db.get('footerListOne').value(),
			footerListTwo: db.get('footerListTwo').value(),
			footerListThree: db.get('footerListThree').value(),
			latestNew: db.get('latestNew').value()
		}
	);
});


app.get("/login", function (request, response) {
	response.render("login");
});
app.post("/admin/login", function (request, response) {
	var userName = request.body.userName;
  	var password = request.body.password;
  	var admin = db.get('admin').find({ userName: userName }).value();
  	if (!admin) {
  	response.render('/login'); 		
  		return ;
  	}
  	if (!admin) {
  	response.render('/login'); 		
  		return ;
  	}
	if (admin.password !== password) {
	  	response.render('/login'); 		
	  		return ;
	  	};

  	response.cookie('admin', admin.id);
  	response.redirect('/admin');
});

app.get("/cart", function (request, response) {
	response.render("cart");
});


app.get("/fruit", function (request, response) {
	response.render("fruit");
});

app.get("/fixedHeader", function (request, response) {
	response.render("fixedHeader");
});

app.get("/head", function (request, response) {
	response.render("common/head");
});

app.get("/homePage", function (request, response) {
	response.render("homePage", {
		itemList: db.get('itemList').value(),
		productList: db.get('productList').value(),
		productListTwo: db.get('productListTwo').value(),
		productListThree: db.get('productListThree').value(),
		footerListOne: db.get('footerListOne').value(),
		footerListTwo: db.get('footerListTwo').value(),
		footerListThree: db.get('footerListThree').value(),
		latestNew: db.get('latestNew').value()
	});
});
app.get("/product-gridTwo", function (request, response) {
	response.render("product-gridTwo", {
		productListTwo: db.get('productListTwo').value(),
		itemList: db.get('itemList').value(),
		footerListTwo: db.get('footerListTwo').value(),
		footerListOne: db.get('footerListOne').value(),
		footerListThree: db.get('footerListThree').value()
	});
});

app.get("/contactUs", function (request, response) {
	response.render("contactUs", {
		footerListOne: db.get('footerListOne').value(),
		footerListTwo: db.get('footerListTwo').value(),
		footerListThree: db.get('footerListThree').value(),
		latestNew: db.get('latestNew').value()
	});
});
app.get("/aboutUs", function (request, response) {
	response.render("aboutUs", {
		footerListOne: db.get('footerListOne').value(),
		footerListTwo: db.get('footerListTwo').value(),
		footerListThree: db.get('footerListThree').value()
	});
});
app.get("/checkOut", function (request, response) {
	response.render("checkOut", {
		footerListOne: db.get('footerListOne').value(),
		footerListTwo: db.get('footerListTwo').value(),
		footerListThree: db.get('footerListThree').value(),
		latestNew: db.get('latestNew').value()
	});
});
app.get("/product-grid", function (request, response) {
	response.render("product-grid", {
			itemList: db.get('itemList').value(),
			productList: db.get('productList').value(),
			footerListOne: db.get('footerListOne').value(),
			footerListTwo: db.get('footerListTwo').value(),
			footerListThree: db.get('footerListThree').value()
		}
	);
});
// app.get("/product-grid", function (request, response) {
// 	response.render("product-grid", {
// 		itemList,
// 		productList,
// 		footerListOne,
// 		footerListTwo,
// 		footerListThree
// 	});
// });

app.get("/footer", function (request, response) {
	response.render("footer", {			
	footerListOne: db.get('footerListOne').value(),
	footerListTwo: db.get('footerListTwo').value(),
	footerListThree: db.get('footerListThree').value()
	});
});

app.get("/latestNew", function (request, response) {
	response.render("latestNew", {
		latestNew: db.get('latestNew').value()
	});
});