var z = 30;
function a (){
     z = 20;  // undeclared variable is assigned to global scope variable by javascript.
    let b = 45;
}
a();
console.log(z); 
//console.log(b); // we cant access let outside scope