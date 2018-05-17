/*var app = require("express")();
var http = require("http").Server(app);

app.get("/", function(req, res) {
	res.sendFile(_dirname + "/index");
});

http.listen(3000, function() {
	console.log("Go to localhost: 3000");
});*/

/*
//
var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/index.html")
});

io.on("connection", function(socket) {
	console.log("A user connected");


	socket.on("disconnect", function() {
		console.log("A user disconnected")
	});
});	

http.listen(3000, function() {
	console.log("Go to localhost: 3000");
})
*/
/*

//
var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/index.html")
});

io.on("connection", function(socket) {
	console.log("A user connected");

	setTimeout(function () {
 		socket.send("Sent a message 2 seconds after connection!");

	}, 2000);
	socket.on('disconnect', function () {
		console.log("A user disconnected")
	});
});	
http.listen(3000, function() {
	console.log("Go to localhost: 3000");
})*/


//
/*var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/index.html")
});

io.on("connection", function(socket) {
	console.log("A user connected");
	setTimeout(function() {

 		socket.emit("myEmit", {description: "User event from server"});
	}, 2000);
	socket.on('disconnect', function () {
		console.log("A user disconnected")
	});
});	
http.listen(3000, function() {
	console.log("Go to localhost: 3000");
})*/
//
/*var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/index.html")
});

io.on("connection", function(socket) {
	
	socket.on('connection', function () {
		console.log(data)
	});
});	
http.listen(3000, function() {
	console.log("Go to localhost: 3000");
})*/
//

var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/index.html")
});

var users = 0;

io.on("connection", function(socket) {
	users++;
	socket.broadcast.emit("broadcast", {description: users + " users connected"});
	socket.on('disconnect', function () {
		users--
		socket.broadcast.emit("broadcast", {description: users + " users disconnected"});
	});
});	
http.listen(3000, function() {
	console.log("Go to localhost: 3000");
})