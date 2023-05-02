let item = {
    name:'x',
    price:25000,
    dimension:{ // adding a new object.
      length:10,
      breadth:15
    }
}

console.log(item.price);

item.price = 30000; // change a value directly by using property name.
console.log(item.price);

item.quantity = 1; // adding a new property
console.log(item);

let key = 'quantity'; // square bracket notation./ we can change a value by using key variable 
item[key] = 22;
console.log(item);


console.log(item.dimension.length);

// ********************************************************

let item1 = {
    name2:"food",
    quantity:2,
    addToList(){
        console.log("Added to cart");
    },
    delivered: function(){
        console.log("Delivered successfully");
    }
}
console.log(item1);
item1.delivered(); // when we invoke  a function by using object is called method.
item1.addToList();

