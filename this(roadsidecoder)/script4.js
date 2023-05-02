// what is output?

const user = {
    firstName:"Banu",
    getName(){
        const firstName = "Dinesh";
        return this.firstName;
    },
};
console.log(user.getName());