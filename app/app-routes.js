module.exports = (app) => {
	'use strict';

	app.get('/', (req, res) => {
		res.render('template', {
			title: 'Hello, World!',
			content: '<p>meh</p>'
		});
	});

	app.get('/name/:test', (req, res) => {
		res.render('template', {
			title: req.params.test,
			content: '<p>whoop whoop!</p>'
		});
	});
}