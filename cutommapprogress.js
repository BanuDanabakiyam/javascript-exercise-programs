// ******************** CUSTOMIZE MAP PROGRESS ***********************************

// myMap function adding to Array
Array.prototype.myMap = function(name){ // it will create empty array
    let temp = [];// entha array voda lenght than soldrathuku use pandra keyword this.
    for(let i = 0 ; i < this.length ; i++){
        temp.push(name(this[i],i,this));// current element,index,actual array.
    }
    return temp;
};

const nums = [1,2,3,4,5];

const multiplyByTwo = nums.myMap((nums,i,arr) => {
        return  nums * 2;
})
console.log(multiplyByTwo);