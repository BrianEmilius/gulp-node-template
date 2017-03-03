module.exports = (app) => {
	'use strict';

	app.get('/', (req, res) => {
		res.render('template', {
			name: 'Brian'
		});
	});

	app.get('/blargh', (req, res) => {
		res.render('template', {
			name: 'Blargh'
		});
	});
}