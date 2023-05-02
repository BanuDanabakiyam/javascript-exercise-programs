// ************** Immediate invoke function expression ***********************

function x (){// before IIFE
    console.log("x is called");
}
x();


//*******************  After ********************** */

(function x (){
    console.log("x is called");
})();
//   without  invoke the function . the function change to expression () then we define the function that time its called.


(function z(num1,num2){
    console.log(num1 * num2);
})(2,5);

((num1,num2) => {
    console.log(num1 * num2);
})(20,5);


// Syntax of IIFE

// (function (){ 
//     // Function Logic Here. 
//     })();
    