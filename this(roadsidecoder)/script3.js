class user{
    constructor(n){
        this.name = n;
    }

    getName(){
        console.log(this.name);
    }
}

const user1 = new user("BanuPriya");
console.log(user1);
user1.getName();