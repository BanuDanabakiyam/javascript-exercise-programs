//what's the output?   what is JSON.stringfy ? JSON.parse?


const user = {
    name:"Banupriya",
    age:27,
}

console.log(JSON.stringify(user));// it convert object into string."name" : "Banupriya"

const stringToObject = JSON.stringify(user);
console.log(JSON.parse(stringToObject));// it convert string into object. name : "Banupriya"