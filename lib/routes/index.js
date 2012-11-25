
module.exports = function(app){
	app.get('/', function(req, res){
		res.render('index', {title: 'Riak Hello World', layout:'layout'});
	});

	app.get('/help', function(req, res){
		res.send("Hello World");
	});
};