this.a = 10;
console.log(this.a);// this in node global object
                    // this in browser window object

const user1 = {
    name:"Banu",
    age:27,
    getDetails(){
        console.log(this.name);// this keyword refer to this class.its targeting parent object.
    }
}; 

user1.getDetails();
