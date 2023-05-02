function makeUser(){
    return {
        name:"BanuPriya",
        ref:this,
    };

}
let user = makeUser();

console.log(user.ref.name);
