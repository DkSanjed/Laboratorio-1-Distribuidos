var shell = require('shelljs');

var  servidor1 = document.getElementsById("box1");

function server1Curl() {
    setInterval(function(){
        if (shell.echo('curlServer1.sh', { root: __dirname }) ==200){
            servidor1.className.replace("notification is-warning");
        }else{
            servidor1.className.replace("notification is-danger");
        }
        
    }, 1000)
}