// what is call back function in javascript?
// Take a function and pass to another function is called call back function.

setTimeout(function (){
     console.log("timer");
},5000);

 // in memory settimeout function wait for time expire to execute the function 

// javascript is a synchronous and single thread ( It execute a program  at a time in specific order)

function x(y){ // we are passing y function inside a x function.  -------- after finish x,y function the call stack
                                                                 // will be empty then after done settimeout function
                                                                  // again function pop up in call stack this is power of call back.
    console.log("x");                                                     
    y();
}
x(function y(){
    console.log("y");
})


