// ***************** OBJECT ***************************
let user = {
    name:"BanuPriya",
    age:27,
    "like this video":true
};
user.name = 'Dineshkumar';// modify properties
delete user.age;// delete the property
console.log(user["like this video"]);


const user1 = (function (a){// function expression.
    return a + 1;
})(5);
console.log(user1);

