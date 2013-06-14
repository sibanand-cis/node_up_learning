// application using express engine and jade for template 

var express = require('express');
var app = express();

// add views to app.js
app.set('view engine', 'jade');
app.set('view options', { layout: true});
app.set('views', __dirname + '/views'); //This command tells Express that all of its views should be drawn from folder named "views" which is subordinate to the directoryfrom where the code file is being run(__dirname)

app.get('/stooges/:name?', function(req,res,next){
	var name = req.params.name.toUpperCase();

	switch(name? name.toLowerCase() : ''){

		case 'larry':
		case 'curly':
		case 'moe':
			res.render('stooges', {stooge: name});
			break;

		default:
			next();
	}
});

app.get('/stooges/*?',function(req,res){
	res.render('stooges', {stooge: null});
});

app.get('/?',function(req,res){
	res.render('index')
});

var port = 3000;
app.listen(port);

console.log('Listening on port' + 3000)