var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.addRecipe = function(req,res){
    res.render('recipe',{});
}

module.exports = router;
