// set up ======================================================================
var express        = require('express'),
	app            = express(),                     // create our app w/ express
	mongoose       = require('mongoose'),           // mongoose for mongodb
	database       = require('./config/database'),
	morgan         = require('morgan'),             // log requests to the console (express4)
	bodyParser     = require('body-parser'),        // pull information from HTML POST (express4)
	methodOverride = require('method-override'),    // simulate DELETE and PUT (express4)
	port           = process.env.PORT || 3000;

// configuration ===============================================================
mongoose.connect(database.url);                                                // connect to mongoDB database on localhost
app.use(express.static(__dirname + '/public'));                                // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                                        // log every request to the console
app.use(bodyParser.urlencoded({'extended': 'true', limit: '50mb'}));           // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                                    // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json', limit: '50mb' })); // parse application/vnd.api+json as json
app.use(methodOverride());

app.set('view engine', 'pug');

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("The magic happens on port %d", port);