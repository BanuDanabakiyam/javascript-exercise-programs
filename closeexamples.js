
var a = 10;

function f1() {
    return function() {
        console.log(a);// in this line perform hoisting we can acces variable before intialization so that o/p undefined
    }
    var a = 20;
}

var f2 = f1();
f2();


