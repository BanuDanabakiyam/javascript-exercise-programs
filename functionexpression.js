// ------------------------ Named function expression -------------------------------


// var b = function xyz(){ /// with function name and assigned to variable
//     console.log("Named function expression");
// }
// b();
// xyz();  --- we cant acceses outside scope .we can access only inside scope of function

var b = function xyz(){
    console.log(xyz);
}
b();

// function x(n) --- the values get inside the function is called parameteres   //labels//identifier
// x(6) --- the values passed to the function is called arguments. 