// ----------------------------- Before hoisting -------------------------

let x =7;
var y = 12;

function getname(){
       x = 22;
         y = 88;
    
         console.log(x,y);

}
getname();//invoke function
console.log(x);
console.log(y);


//expect output print console in function and print x value
// not defined means the value of particular variable not present in our program eg: a= 10; is called reference error.
// undefined means even before we execute our js program it will allocate special place holder for variables and function.




