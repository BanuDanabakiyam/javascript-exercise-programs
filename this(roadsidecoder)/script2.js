const user1 = {
    name:"Banupriya",
    age:27,
    childObj:{
        newName:"Dinesh",
        getDetail(){
            console.log(this.newName ,"and ",this.name);
        },
    },
};
user1.childObj.getDetails();