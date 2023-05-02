// ******************* CUSTOMIZE REDUCE PROGRESS  *****************************

// array.reduce((acc,curr,i arr) => {},intialvalue)
Array.prototype.myReduce = function(name,intialvalue){
    let accumulator = intialvalue;
    for(let i = 0 ; i < this.length ; i++){
        accumulator = accumulator ? name(accumulator,this[i],i,this) : this[i];
    }
    return accumulator;
};

const num = [1,2,3,4,5];

const sum = num.myReduce((acc,curr,i,arr) => {
          return acc + curr;
        },0);

console.log(sum);


