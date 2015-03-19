var express = require('express');
var router = express.Router();
var db = require('../modules/dbconnection').getCourses;

/* GET home page. */
router.get('/', function(req, res) {
  //res.render('index', data);
  db(req,res);
});

router.appendCourse = function(req,res){
    
    res.render("course",{});
}

module.exports = router;

