//  map/filter/reduce
 //*********************** MAP ************************************* */
 
// map method create new array from existing array by applying function to each element of the first array.

const num = [1,2,3,4,5]

const multiplyFive = num.map((num,i,arr2) =>{
// call back function happen in map method.(currentelement(num),index(i),actualarray(arr))
    return num * 15;
})
console.log(multiplyFive);


//********************************* FILTER *************************** */

// filter method applying condition to each element in array if it condition gives true the elemenet will
// push out in array otherwise it does not.

const num1 = [1,2,3,4,5];

const moreThanTwo = num1.filter((num1) => {
    return num1 >= 5;
})
console.log(moreThanTwo);

/*************************** REDUCE ****************************** */

// In array each element it reduce to single element
//{1,2,3,4,5} => 10 total 5 element in array and it reduce to single element like 10.

const num2 = [10,20,30,40,50];

const sum = num2.reduce((acc,curr,i,arr) => {
    // acc -> accumulator means result of previous computation
    // curr -> current value (current element of array)
    // i -> index
    // arr -> actual array .
    // 0 -> it takes first element of array as value for accumulator.
 return acc + curr;
},0)

console.log(sum);