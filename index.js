var express = require('express');
var bookController = require('./controller/books-Controller');
var data = require('./models/book');

var app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', './views');


app.listen('3000', function(){
  console.log(" listening port 3000!");
});