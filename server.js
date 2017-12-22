var express = require('express');
var logger = require('morgan');
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });
var path    = require("path");
var index = require('./controllers/index');

var app = express();

app.use(logger());
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public/style'));

app.all('/', index);

app.use(function(req,res) {
	res.status(404).end("Page Not Found");
});

//listen on port passed as 2nd param if not null, otherwise listen on port 1337
if (process.argv[2]) {
	app.listen(process.argv[2]);
} else {
	app.listen(1337);
}