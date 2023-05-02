// ****************** process.nexttick() ***************************

//we instruct the engine to invoke this function at the end of the current operation, 
//before the next event loop tick starts

console.log("normal text");
setImmediate(function x (){
    console.log("set immediate function start");
})
process.nextTick(function y (){
    console.log("processtick function print at the end of current loop");
})
function a (){
    for(let i = 1 ; i <= 5 ; i++){
        setTimeout(function(){
            console.log(i);
        },i * 1000);
    }
}
a();