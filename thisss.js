var a = 10;
function fun (){
    var x = 90;
    console.log(x);
}
console.log(a);
//console.log(window.a);
console.log(this.a);



function User(name,age){
    this.name = name;
    this.age = age;
    console.log(this.name + " you logged");

}

let user1 = new User("x",12);
console.log(user1);