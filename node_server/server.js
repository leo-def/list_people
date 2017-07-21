/*
npm init
npm install express --save
npm install mongoose --save
npm install body-parser --save
node server.js
*/
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var response = require('./response.json');

//http://localhost:8090/rest/people
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = 8090

var router = express.Router();             

//router.get('/people', function(req, res) {
//    res.send(response);   
//});
router.all('/people', function(req, res){
    res.header("Access-Control-Allow-Origin", "http://localhost:4200")
	res.header("Access-Control-Allow-Methods", "POST, PUT, GET, OPTIONS, DELETE")
	res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Methods, Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, Accept,  Access-Control-Allow-Origin")
				
    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.sendStatus(200);
    }
    else {
     res.send(response);  // next();
    }
	
});
// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /rest
app.use('/rest', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);