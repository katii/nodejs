var express = require('express');
var router = express.Router();

var data = {
    title:'My first application',
    name:'Jokunen',
    courses:['Oulu web', 'Game programming','Qt'],
    participants:23
}

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', data);
});

module.exports = router;
