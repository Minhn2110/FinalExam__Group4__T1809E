var express = require('express');
var bodyParser = require('body-parser');
var app = express();


var multer  = require('multer');
var upload = multer({ dest: './public/uploads/' });
var cookieParser = require('cookie-parser');
const shortid = require('shortid');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);
db.defaults({ productList: [], itemList: [],footerListOne: [], footerListTwo: [],
footerListThree: [], latestNew: [] ,admin: [] ,customers: []  ,  productListTwo: [], productListThree: []  })
  .write();

app.use(cookieParser());
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
	  
	var page =  0;
	var start = 0;
	var end = searchProduct.length;

	var totalItem = searchProduct.length;
	var totalpage = 0;

	response.render("product-grid",{
		itemList: db.get('itemList').value(),
		footerListTwo: db.get('footerListTwo').value(),
		footerListOne: db.get('footerListOne').value(),
		footerListThree: db.get('footerListThree').value(),
		productList: searchProduct,
		start: start,
		end: end,
		page: page,
		totalpage : 0,
		totalItem : totalItem,
		q: q
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

app.get("/product-information/:id", function (request, response) {
	var id = request.params.id;
	var product = db.get('productList').find({ id: id }).value();
	response.render("product-information", {
			itemList: db.get('itemList').value(),
			productList: db.get('productList').value(),
			footerListOne: db.get('footerListOne').value(),
			footerListTwo: db.get('footerListTwo').value(),
			footerListThree: db.get('footerListThree').value(),
			latestNew: db.get('latestNew').value(),
			product: product
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
		latestNew: db.get('latestNew').value(),
		WinterMenu: db.get('WinterMenu').value(),
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
app.get("/product-grid/:page", function (request, response) {
	var page =  request.params.page;
	var start = (page == 0) ? 0 : (page - 1) * 9;
	var end = (page * 9) - 1;

	var totalItem = db.get('productList').value().length;
	var totalpage = 0;
	if(totalItem <= 9) {
		totalpage = 1;
	} else {
		if(totalItem%9 == 0) {
			totalpage = parseInt(totalItem/9);
		} else {
			totalpage= parseInt(totalItem/9) + 1;
		}
	}

	response.render("product-grid", {
			itemList: db.get('itemList').value(),
			productList: db.get('productList').value(),
			footerListOne: db.get('footerListOne').value(),
			footerListTwo: db.get('footerListTwo').value(),
			footerListThree: db.get('footerListThree').value(),
			start: start,
			end: end,
			page: page,
			totalpage : totalpage,
			totalItem : totalItem
		}
	);
});

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

app.get("/feedback", function (request, response) {
	response.render("feedback", {
		latestNew: db.get('latestNew').value()
	});
});


app.get("/fruit-juice", function (request, response) {
	response.render("fruit-juice", {
		FruitJuice: db.get('FruitJuice').value(),
		itemList: db.get('itemList').value(),
		footerListOne: db.get('footerListOne').value(),
		footerListTwo: db.get('footerListTwo').value(),
		footerListThree: db.get('footerListThree').value()
	});
});

app.get("/vegetableJuice", function (request, response) {
	response.render("vegetableJuice", {
		VegetableJuice: db.get('VegetableJuice').value(),
		itemList: db.get('itemList').value(),
		footerListOne: db.get('footerListOne').value(),
		footerListTwo: db.get('footerListTwo').value(),
		footerListThree: db.get('footerListThree').value()
	});
});

app.get("/mocktail", function (request, response) {
	response.render("mocktail", {
		Mocktail: db.get('Mocktail').value(),
		itemList: db.get('itemList').value(),
		footerListOne: db.get('footerListOne').value(),
		footerListTwo: db.get('footerListTwo').value(),
		footerListThree: db.get('footerListThree').value()
	});
});

app.get("/winterMenu", function (request, response) {
	response.render("winterMenu", {
		WinterMenu: db.get('WinterMenu').value(),
		itemList: db.get('itemList').value(),
		footerListOne: db.get('footerListOne').value(),
		footerListTwo: db.get('footerListTwo').value(),
		footerListThree: db.get('footerListThree').value()
	});
});

app.get("/chocolateJuice", function (request, response) {
	response.render("chocolateJuice", {
		ChocolateJuice: db.get('ChocolateJuice').value(),
		itemList: db.get('itemList').value(),
		footerListOne: db.get('footerListOne').value(),
		footerListTwo: db.get('footerListTwo').value(),
		footerListThree: db.get('footerListThree').value()
	});
});