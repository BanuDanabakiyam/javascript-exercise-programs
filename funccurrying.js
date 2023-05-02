// ******************************function currying done by bind menthod ***************************

let multiple = function x(x,y){
    console.log(x * y);
}                   // multiple method directly can't be invoked.
let multiplyByTwo  = multiple.bind(this,2);//preset the arguments inside the function.
multiplyByTwo(5);//curry the function.
let multiplyByThree = multiple.bind(this,3,3);
multiplyByThree();



// ------------------ another way done function currying by using closure --------------------------


let multi = function(x){
    return function(y){
        console.log(x * y);
    }
}
let mu1ti2 = multi(2);
mu1ti2(4);
let multi3 = multi(100);
multi3(36);