var express = require('express');
var router = express.Router();
var db = require('../modules/dbconnection').getRecipes;

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
    db(req,res);
});

router.addRecipe = function(req,res){
    res.render('recipe',{});
}

module.exports = router;
