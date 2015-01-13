var express = require('express');
var router = express.Router();
var db = require('../modules/dbConnection').getCourses;

/*var data = {
    title:'My first application',
    name:'Jokunen',
    courses:['Oulu web', 'Game programming','Qt'],
    participants:23
}
*/

/* GET home page. */
router.get('/', function(req, res) {
    //res.render('index', data);
    db(req,res);
});

router.appendCourse = function(req,res){
    res.render("course",{});
}

module.exports = router;

