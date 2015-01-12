var mongoose = require('mongoose');
                       
var url = "mongodb://localhost/courses";
                       
// check if we can connect to mongodb
mongoose.connect(url, function(err, succ){
    if(err){
        console.log("Error: " + err);
    }
    else{
        console.log("Nicely connected to " + url);
    }
});