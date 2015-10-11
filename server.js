//Adding Express Module into the system
var express = require('express');

//Environment variables
var env = process.env.NODE_ENV = process.env.NODE_ENV || "development";

// Making Express app
var app = express();

//including handlebar
var hbs = require('hbs');

// Configuring the app
  app.use(express.static(__dirname + '/public'));
  app.set("views",__dirname+"/server/views");
  app.set('view engine', 'html');
  app.engine('html', hbs.__express);

//Routes
app.get("/partials/:pathInner",function(req,res) {
  res.render('partials/'+ req.params.pathInner);
});
app.get("*",function(req,res) {
  res.render('index',{layout: '/layouts/data.hbs'});
});
//listen to requests
app.listen(8080);
console.log("====WELCOME====");
console.log("BeMyPet Loading..");
