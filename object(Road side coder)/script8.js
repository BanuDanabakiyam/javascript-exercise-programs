//  Destructring objects
// destructuring objects means it take specific proerties from object;

let user = {
    name:'Banu',
    age:27
};

//const { property name} = objectname; syntax
// inside curly brace we write which property we want to destructure.

const {age } = user;
console.log(age);