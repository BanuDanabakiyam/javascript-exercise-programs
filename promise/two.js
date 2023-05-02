console.log("one");
function textMessage(userName,cb){
    setTimeout(() => {
        cb("say hai to  ${userName}" );
    },3000);
}

function writeMessage(write,cb){
    setTimeout( function() {
        cb("say hi to write ${write}");
    },2000);
}
const message = textMessage("Banu",function(message){
    console.log(message);
    writeMessage("Novelwrite",function(action){
        console.log(action);
    });
    
});