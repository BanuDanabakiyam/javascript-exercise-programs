
// ************************************ CUSTOMIZE FILTER PROGRESS ********************

Array.prototype.myFilter = function(name){
    let temp = [];
    for(let i = 1 ; i < this.length ; i++){
        if(name(this[i],i,this))
            temp.push(this[i]);
        }
    return temp;
};

const num1 = [1,2,3,4,5,6];

const moreThanTwo = num1.myFilter((num1) => {
        return num1 > 2;
});
console.log(moreThanTwo);
