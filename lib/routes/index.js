
module.exports = function(app){
	app.get("/", function(req, res){
		res.render('index.bliss', {title: 'Riak Hello World'});
	});

	app.get("/help", funciton(req, res){
		res.send("Hello World");
	});
}