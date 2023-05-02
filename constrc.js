// function user(){
//     this.name = 'banu'; // this keyword used in constructor it refer to newly created object.
// }
// var user1 =new user();
// console.log(user1.name);

// user.prototype.age = 27; // adding new property to constructor by using prototype.

// console.log(user1.age);
function User(name,age,bloodGroup){
    this.name = name;
    this.age = age;
    this.bloodGroup = bloodGroup;
    this.group = function(){
        console.log("Name " ,name , "\nage " ,age , "\nBloodGroup " , bloodGroup); 
    }
}
let person = new User("Banu",27,"A+");
console.log(person.age);
console.log(person.group());

