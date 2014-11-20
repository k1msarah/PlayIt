module.exports = function(app){
	app.get('/', function(req, res) {
		res.render('index');
	});

	app.get('/catchit', function(req, res) {
		res.render('catchit');
	});

	app.get('/matchit', function(req, res) {
		res.render('matchit');
	});

	app.get('/popit', function(req, res) {
		res.render('popit');
	});
}
