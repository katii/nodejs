// exports objektiin liitetyt funktiot ja muu data näkyy moduulin ulkopuolelle, muut ei
exports.products = function(req,res){
    var html = '<ul>';
    // go through all products
    for(var i = 0; i < exports.data.length; i++) {
        html += '<li>' + exports.data[i].prod_name + ' ' + exports.data[i].price + '</li>';
    }
    html += '<ul>';
    
    res.send(html);
}

exports.data = [];

var test ="this is not visible";

function myFunc(){
}