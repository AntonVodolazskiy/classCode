var express = require("express");
var app = express();
var courses = require("./data/courses.json");
var bodyParser = require("body-parser");

app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(_dirname + '/public'));
app.use(express.static(_dirname + '/node_modules/bootstrap/dist'));

app.get('/', function (req, res) {
	res.render('index', {title: "API"});
});

app.listen(3000, () => console.log('Example app listening on port 3000!')) 

