var mongoose = require('mongoose');

var uri = "mongodb://localhost/recipes";

//Check if we can connect to mongodb...
mongoose.connect(uri,function(err,succ){
    if(err){
        console.log("Error: " + err);
    }
    else{
        console.log("Nicely connected to " + uri);
    }
});

var Schema = mongoose.Schema;

//var courses = new Schema({
var recipes = new Schema({
    nimi:{type:String, index:{unique:true}},
    aineet:String,
    valmistus:String,
    lahde:String,
    paivays:Date
});

//var Course = mongoose.model("Course",courses);
var Recipe = mongoose.model("Recipe", recipes);

exports.addRecipe_ = function(req,res){
    
    console.log(req.body);
    
    var temp = new Recipe({
        nimi:req.body.nimi,
        aineet:req.body.aineet,
        valmistus:req.body.valmistus,
        lahde:req.body.lahde,
        paivays:new Date(req.body.paivays)
    });
    
    temp.save(function(err){
        if(err){
            res.render('myerror',{});
        }
        else{
            res.status(301);
            res.setHeader('location','http://localhost:3000');
            res.send();
        }
    });
}

exports.getRecipes = function(req,res){
    console.log('getRecipes');
    Recipe.find(function(err,data){
        
        if(err){
            res.render("myerror",{});
        }
        else{
            res.render('index',{recipe_data:data});
        }
    });
}

exports.getRecipeInfo = function(req,res){

    console.log('getRecipeInfo');
    console.log(req.query);
    Recipe.findById(req.query.id,function(err,data)     {
        if(err){
            res.render('myerror');
        }
        else{
            //res.render('courseinfo',data);
        }
    });
}
