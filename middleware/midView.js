var shell = require('shelljs');

var  servidor1 = document.getElementsById("box1");
var  servidor2 = document.getElementsById("box2");

setInterval(function(){
    if (shell.exec('curlServer1.sh') == 200){
        servidor1.className.replace("notification is-warning");
    }else{
        servidor1.className.replace("notification is-danger");
    }
    if (shell.exec('curlServer2.sh') == 200){
        servidor2.className.replace("notification is-warning");
    }else{
        servidor2.className.replace("notification is-danger");
    }  
}, 1000)