
 // -------------------- closure ------------------------
// closure is function its bind together with lexical environment.

function x(){
    var a = 10;
    function y(){
        console.log(a); // first try to find a variable in local memory but a is not present
                         // so its goes to lexical parent to find variable.
    }
    y();
}
x();

// --------------------- beauty of javascrip-------------
function a(){
    var ans = 10;
}
a(function b(){
    console.log(ans); }
);

function n(){
    var x = 22;
    function m(){
        console.log(x)
    }
    return m;             //return function m(){
                          // console.log(x);    same
    }

var dec = n();
dec();



