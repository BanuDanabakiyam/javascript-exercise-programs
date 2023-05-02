const func = (function(a){
    delete a;// delete keyword used in properties not in local variables.so it wont affect it.
    return a;
})(5);

console.log(func);

// ***************************************************

