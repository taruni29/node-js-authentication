var express    = require("express");
var db = require('./db');
var bodyParser = require('body-parser');
var app = express();
var path = require('path')
var port = process.env.PORT || 8080;
var routes = require("./routes/index")
var AuthController = require('./controllers/AuthController');
var router=express.Router();
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/api/auth', routes.sample);

app.listen(port,()=>{
    console.log("signup Server started on port " + port);
});
