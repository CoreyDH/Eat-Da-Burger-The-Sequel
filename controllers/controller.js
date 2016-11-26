/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();
// var burger = require('../models/burger.js');
var models = require('../models');
var sequelizeConnection = models.sequelize;
var burgers = models.burgers;

sequelizeConnection.sync();

router.get('/', function (req, res) {
	res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {

	burgers.findAll().then(function(data) {
		res.render('index', { burgers: data });
	});

});

router.post('/burgers/create', function (req, res) {

	if(req.body.burger_name) {

		burgers.create({ burger_name: req.body.burger_name, devoured: 0 }).then(function(data) {
			res.redirect('/burgers');
		});

	} else {
		res.redirect('/burgers');
	}

});

router.put('/burgers/update/:id', function (req, res) {

	if(req.params.id) {

		burgers.findById(req.params.id).then(function(burger) {
			if(burger) {
				burger.updateAttributes({
					devoured: req.body.devoured
				}).then(function() {
					res.redirect('/burgers');
				});
			}
			
		});

	} else {
		res.redirect('/burgers');
	}

});

router.delete('/burgers/delete/:id', function(req, res) {

	if(req.params.id) {

		burgers.destroy({
			where: {
				id: req.params.id
			}
		}).then(function(data) {
			res.redirect('/burgers');
		});

	} else {
		res.redirect('/burgers');
	}

});

module.exports = router;
