
// spread operator used to spread the elements.

let a = 10;
let b = a;// deep copy -- we copy the exact value / primitive datatypes olny accept deep copy 
b = 100; // it  change only in b value.
console.log(a);
console.log(b);

// **************************************

let arr1 = [1,2,3,4];
let arr2 = arr1; // shadow copy it copyonly reference of object 
arr2[0] = 11;// it change but both array 0 th index value changed ..spread is used to overcome for this problem
console.log(arr1);
console.log(arr2);

let arr3 = [10,20,30,40];
let arr4 = [...arr3]; // now it does not copy reference of object..deep copy only happen.
arr3[0] = 11; // now different reference for both object
console.log(arr3);
console.log(arr4);


let obj1 = {
    name:"x",
    age:25
}

let obj2 = {...obj1}//spread operator
obj2.name = 'y';
console.log(obj1);
console.log(obj2);
//********************************************************************* */

function x(a,b){
    return a+b;
}
const arr = [1,2];//before spread operator 1,2 is assigned for a and b is undefined.
console.log(x(...arr));
