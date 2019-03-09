var express = require('express');

var app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', './views');


app.listen('3000', function(){
  console.log(" listening port 3000!");
});

app.get("/", function(request, response) {
	response.render("index");
});


app.get("/about", function(request, response) {
	response.render("about");
});

app.get("/contact", function(request, response) {
	response.render("contact");
});


app.get("/cart", function(request, response) {
	response.render("cart");
});


app.get("/fruit", function(request, response) {
	response.render("fruit");
});