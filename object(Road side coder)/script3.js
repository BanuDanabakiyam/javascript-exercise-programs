const property = "Firstname";
const name = "Banupriya";

const user = {
    [property] : name
};
console.log(user);


// ******** Iterate the properties forloop.

let user1 = {
    name:"BanuPriya",
    age:27,
    likethisvideo:true
};
for(key in user1){ // iterate the key,
    console.log(key);
}

for(key in user1){// iterate the value
    console.log(user1[key]);
}



