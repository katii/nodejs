var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var data = [];

// middleware layers
app.use('/',express.static(__dirname + '/public'));
// This is for express to create me a body object for post method
app.use(bodyParser());

// define routers. must be after middlewares
app.get('/products', function(req,res){
    
    var html = '<ul>';
    for(var i = 0; i < data.length; i++) {
        html += '<li>' + data[i].prod_name + ' ' + data[i].price + '</li>';
    }
    html += '<ul>';
    
    res.send(html);
});

app.get('/add_product', function(req,res){
    res.sendfile('public/add_product.html');
});

app.post('/product_info', function(req,res){
    console.log(req.body.prod_name);
    data.push(req.body);
    // ohjaa takas etusivulle
    res.redirect('/');
});

app.post('/json_data', function(req,res){
    
    console.log(req.body);
    res.send('OK');

});
         
//app.get('/', function(req,res){
//    
//    res.sendfile('index.html');
//        
//});

//app.get('/myStyle.css', function(req,res){
//    
//    res.sendfile('myStyle.css');
//        
//});

app.listen(3000);