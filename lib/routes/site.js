
module.exports = function(app){
	app.get('/', function(req, res){
		res.render('site/index', {title: 'Hello World'});
	});

	app.get('/about', function(req, res){
		res.render('site/about', {title: 'About Hello World'});
	});

	app.get('/contact', function(req, res){
		res.render('site/contact', {title: 'Contact Hello World'});
	});
};