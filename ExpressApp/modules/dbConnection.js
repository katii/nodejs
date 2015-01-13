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

var schema = mongoose.Schema;

var courses = new schema({
    name:{type:String,index:{unique:true}},
    duration:Number,
    description:String,
    participants:Number,
    startingDate:Date,
    endingDate:Date
});

var course = mongoose.model("Course", courses);

exports.addCourse = function(req,res){
    console.log(req.body);
}