const express = require('express');
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true} ));

var courses = [
	{
		id: 1,
		name: 'JS'
	},
	{
		id: 2,
		name: 'PHP'
	},
	{
		id: 3,
		name: 'JAVA'
	},
];
app.get('/', function (req, res) {
  res.send('Hello World');
});

app.get('/api/v1/courses', function (req, res) {
  res.send(courses);
});

app.get('/api/v1/courses/:id', function (req, res) {
	//console.log(typeof req.params.id)
  	var course = course.find(function (course) {
  		return course.id === Number(req.params.id);
  });

  res.send(course);

});

app.post('/api/v1/courses/', function (req, res) {
	var course = {
		id: Date.now(),
		name: req.body.name
	};

	courses.push(course);
	res.send(courses);
})

app.put('/api/v1/courses/:id', function (req, res) {
	var course = courses.find(function (course) {
		return course.id === parseInt(req.params.id);
	});

	course.name = req.body.name;
	res.send(course);
});

app.delete('/api/v1/courses/:id', function (req, res) {
	courses = courses.filter(function (course) {
		return course.id !== parseInt(req.params.id);
	});
	res.sendStatus(200);
});

app.listen(3000, () => console.log('Example app listening on port 3000!')) 