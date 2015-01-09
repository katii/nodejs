// Wait the document to be loaded
window.onload = function(){
    
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = ready;
    xhr.open('POST','/json_data',true);
    xhr.setRequestHeader("content-type","application/json");
    
    var data = {
        name:'jesse joo',
        address:'jokupolku 20',
        phone:'543654765'
    }
    
    xhr.send(JSON.stringify(data));

}

function ready(){
    console.log("ok");
}