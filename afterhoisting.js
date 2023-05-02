//----------------------------- After hoisting -------------------------------------------

getname();// we are trying to access getname before intialization
// In hoisting the function can able to invoke function before intialization

console.log(x); // we are trying  to access x before put some value on it --- undefined
console.log(getname)//we try to console the function so it display actual function of our program 
var x =7;

function getname(){
    console.log("hello hoisting");
}


// whenever we run a javascript program the execution context created and it create 2 execution phase
// 1. memory execution phase
// 2. code execution phase 
