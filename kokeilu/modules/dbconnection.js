var mongoose = require('mongoose');

var uri = "mongodb://localhost/courses";

//Check if we can connect to mongodb...
mongoose.connect(uri,function(err,succ){
    if(err){
        console.log("Error: " + err);
    }
    else{
        console.log("Nicely connected to " + uri);
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

var Course = mongoose.model("Course",courses);

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
            res.render('myerror',{});
        }
        else{
            res.status(301);
                        res.setHeader('location','http://localhost:3000');
            res.send();
        }
    });
}

exports.getCourses = function(req,res){
    console.log('getCourses');
    Course.find(function(err,data){
        
        if(err){
            res.render("myerror",{});
        }
        else{
            res.render('index',{course_data:data});
        }
    });
}

exports.getCourseInfo = function(req,res){

    console.log(req.query);
    Course.findById(req.query.id,function(err,data)     {
        if(err){
            res.render('myerror');
        }
        else{
            res.render('courseinfo',data);
        }
    });
}




