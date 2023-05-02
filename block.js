{
    // This is block
}

{
    //compound statement
    var x = 1008;
    console.log(x);

    // Multiple javascript statement form a group together is called block statement.

}

if(true)
{
    var x = 220;      // we group multiple statement in block so we use where javascript expect single statement
    console.log(x);
 
}


// ------------------------------------------ block scope -------------------------

// what all variables and function access inside block is called block scope.
// a present in global scope so we can access outside scope alse
// let,const present in block scope.we cant access outside of scope.

{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
// console.log(b);  throw an error of referrence error
// console.log(c);