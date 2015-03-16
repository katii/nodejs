var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.newRecipe = function(req,res){
    res.render('newRecipe',{});
});

module.exports = router;
