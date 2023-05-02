// **************************************************

// without class keyword

function user1(name,age){
    this.name = name;
    this.age = age;
    this.login = function(){
        console.log("You logged");
    }
}
let user2 = new user1("Banu",27);
user2.login();
