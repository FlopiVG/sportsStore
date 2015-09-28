var connect = require("connect");

connect.createServer(
	//connect.static only work in connect version 2.x.x
	connect.static("../AngularJS")
	).listen(5000);