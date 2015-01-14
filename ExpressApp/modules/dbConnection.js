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

var Course = mongoose.model("Course", courses);

exports.addCourse = function(req,res){
    console.log(req.body);
    var temp = new Course({
        name:req.body.name,
        duration:req.body.duration,
        description:req.body.description,
        participants:req.body.participants,
        startingDate:new Date(req.body.startDate),
        endingDate:new Date(req.body.endingDate)
    });
    
    temp.save(function(err){
        if(err){
            console.log("Error");
            res.render('myerror',{});
        }
        else{
            console.log("All ok");
            exports.getCourses(req,res);
        }
    });
}

exports.getCourses = function(req,res){
    console.log("getCourses");
    Course.find(function(err,data){
        if(err){
            res.render("myerror",{});
        }
        else{
            console.log(data);
            res.render('index',{course_data:data});
        }
    });
}

exports.getCourseInfo = function(req,res){
    console.log(req.query);
    Course.findById(req.query.id, function(err,data){
        if(err){
            res.render('myerror');
        }
        else{
            res.render('courseinfo', data);
        }
    });
}
                    
                    
                    
                    
                    
                    
                    
                    
                    