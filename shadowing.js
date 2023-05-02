// var a = 100;
// {
//     var a = 10; // --- This is shadow of above  var a = 100; variable.
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);

// var a  = 100 , a = 10 both pointing to same memory it change a value from 100 to 10 in global memeory itself.

//-------------------------------------- let -----------------------------------------------



// let a = 10; // script block -- create another memory space
// {
//     let a = 20;
//     var b = 100;
//     const c = 22;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a)

let a = 20;
function x(){
    var a = 22;
    console.log(a);
    
}
console.log(a);






