// what is anonymous function?
// A function without name is called anonymous function
// function statement vs function expression vs function declaration


// ---------------- Function statement ------------------
// function x(){    A function with multiple line is called function statement.
//     ------- console.log("a");
//     -------
// }


//------------------ Function expression -------------------
//  var a = function x () {  A function can be value of variable is called function expression.
//     console.log("a");
  // }
 
  // A major difference between fun expression and fun statement is hoisting.


  x();
  y();
  function x(){  //----- hoisting can be done
    console.log("function statement");
  }
  
  var b = function y (){ // ----- in memory is assigned undefined so we cant able to invoke before intalization in function expression.
    console.log("function expression");
}

// ---------------------- Function declaration --------------
// A function statement is also known as function declaration.


// ---------------------  Anonymous function --------------
var b = function(){
    console.log("Annymous function is called ")
}
b(); // we can use annonymous function to act as variable but not use in proper function.



// ---------------- First class function -----------------------
// Ability to be used like values,arguments ,return function 
// first class function == first class citizen.




