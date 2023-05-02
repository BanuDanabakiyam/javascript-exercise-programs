function getItems(listFunction,fruitList,...args){
    // ...args is rest paramter it cant be middle or first it shold be last

    return [...listFunction,...args,fruitList];
}

console.log(getItems(["Banana","Strawberry"],"Mango","Apple"));