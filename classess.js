class user{  //parent class, base class ,super class
    static numberOfUser = 0;//static variables
    constructor(name,age){
        this.age = age;
        this.name = name;
        user.numberOfUser++; /// we can access static variable by using class
    }
    login(){
        console.log("Hi" + this.name);
        console.log("You logged successfully");
    }
    logout(){
        console.log("you logged out.")
    }
    static totalDisplayUsers(){// static method
        console.log("Total number of users " + user.numberOfUser);
    }
}
let user1 = new user("banu",27);
let user2 = new user("dinesh",28);
user.totalDisplayUsers();// static variable is whole user we cant access a static method by single object it does not make sense.
                         // so that we access by using class name.

   
user1.logout();   



//**************************************************************** */


//          --------------------- INHERITANCE ------------------------

//  inheritance is acquiring a variables and method from base class.

class paidUser extends user{// child class/sub class/derived class
    constructor(name,age){
        super(name,age);//using super keyword we can access parent class constructor.
        this.storage = 100;//default storage.
    }
    message(){
        console.log("You have extra time ");
    }
    login(){//overriding  same method present in parent class we override that method in subclass. 
        console.log("log in");
        return this;
    }

}
let paidUser1 = new paidUser("Dhanam",48);
let paidUser2 = new paidUser("sekar",70);
paidUser1.login();
paidUser1.message();


//******************** method chaining *********************** */

paidUser1.login().message();
    // return object in login menthod.using that object we can access message method.

