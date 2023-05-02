// **************** higher order function *********************************

// A function which takes another function as an argument or return function is called higher order function.

// function x (){ // call back function
//     console.log('x is called');
// }
// function y (x){// higher order function
//     x();
// }


function calculate(operation) {
    switch (operation) {
      case "ADD":
        return function (a, b) {

          console.log(`${a} + ${b} = ${a + b}`);
        };
      case "SUBTRACT":
        return function (a, b) {
          console.log(`${a} - ${b} = ${a - b}`);
        };
    }
}
let fun = calculate("ADD");
console.log(fun(2,4));
console.log(calculate("SUBTRACT")(2,3));


