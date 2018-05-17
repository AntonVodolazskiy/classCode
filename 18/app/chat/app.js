var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/index.html")
});

var users = [];
io.on("connection", function(socket) {
	console.log("A user connected");
	socket.on("setUsername", function (data) {
		console.log(data);
		if (user.indexOf(data) > -1) {
			console.log(data);
			socket.emit("userExists", "<p class="bg-primary">Пользователь" + 
										"<b>" + data + "</b>" +
										"уже существует, выбери другое имя!</p>" );

		} else {
			user.push(data);
			socket.emit("userSet", {userName: data});
		}
	});

	socket.on("message", function() {
		io.socket.emit("newMessage", data);
	})
});

http.listen(3000, function() {
	console.log("Go to localhost: 3000");
});