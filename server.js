// server.js

// set up ======================================================================
// get all the tools we need
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 9000;
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');

var configDB = require('./config/database.js');

// configuration ===============================================================
mongoose.connect('mongodb://localhost:27017/code'); // connect to our database

require('./config/passport')(passport); // pass passport for configuration

app.configure(function() {

	// set up our express application
	app.use(express.logger('dev')); // log every request to the console
	app.use(express.cookieParser()); // read cookies (needed for auth)
	app.use(express.bodyParser()); // get information from html forms

	app.set('view engine', 'ejs'); // set up ejs for templating
	app.use(express.static(__dirname + '/public'));
	// required for passport
	app.use('/bower_components',  express.static(__dirname + '/bower_components'));
	app.use(express.session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
	app.use(passport.initialize());
	app.use(passport.session()); // persistent login sessions
	app.use(flash()); // use connect-flash for flash messages stored in session

});

// routes ======================================================================
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport
var db= require('./app/index.js');

app.get('/snippets', function(req, res){
	db.snippet.find({}, function(err, data){
		console.log(data)
		if (err){
			return res.json(err)
		}
		res.json(data);
	})
})

app.get('/snippets/search', function (req, res) {
	db.snippet.find({title : req.query.query}, function(err, data){
		console.log(data)
		if (err){
			return res.json(err)
		}
		res.json(data);
	})
})

app.get('/snippets/language_search', function (req, res) {
	db.snippet.find({language : req.query.query}, function(err, data){
		console.log(data)
		if (err){
			return res.json(err)
		}
		res.json(data);
	})
})

app.get('/snippets/framework_search', function (req, res) {
	db.snippet.find({framework : req.query.query}, function(err, data){
		console.log(data)
		if (err){
			return res.json(err)
		}
		res.json(data);
	})
})

app.post('/snippets/create', function(req, res){
	console.log(req.body);
	var snippet = new db.snippet(req.body);

	snippet.save(function(err) {
		if (err)
			res.send(err);

		res.json({ message: 'Snippet created!' });
	});
})

app.get('/frameworks', function(req, res){
	db.framework.find({}, function(err, data){
		res.json(data);
	})
})

app.get('/frameworks/search', function (req, res) {
	db.framework.find({language : req.query.query}, function(err, data){
		console.log(data)
		if (err){
			return res.json(err)
		}
		res.json(data);
	})

})

app.post('/frameworks/create', function(req, res){
	console.log(req.body);
	var framework = new db.framework(req.body);

	framework.save(function(err) {
		if (err)
			res.send(err);

		res.json({ message: 'Framework created!' });
	});
})

app.get('/languages', function(req, res){
	db.language.find({}, function(err, data){
		res.json(data);
	})
})
app.post('/languages/create', function(req, res){

	var language = db.language(req.body);
	language.save(function(err){
		if (err)
			res.send(err);

		res.json({ message: 'Language created!' });
	})
})
// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);
