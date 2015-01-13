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

var Schema = mongoose.Schema;

var courses = new Schema({
    name:{type:String,index:{unique:true}},
    duration:Number,
    description:String,
    participants:Number,
    startingDate:Date,
    endingDate:Date
});

var course = mongoose.model("course", courses);

exports.addCourse = function(req,res){
    console.log(req.body);
    var temp = new course({
        name:req.body.name,
        duration:req.body.duration,
        description:req.body.description,
        participants:req.body.participants,
        startingDate:new Date(req.body.startDate),
        endingDate:new Date(req.body.endingDate)
    });
    
    temp.save(function(err){
        if(err){
            res.render('error',err);
        }
        else{
            res.redirect('/');
        }
    });
}