// question 2
// create a function multiplybytwo (obj) that multiplies all numeric property values of nums by 2.

const num = {
    a:100,
    b:200,
    title:"multiply by two"
} ;
multiplyByTwo(num);

function multiplyByTwo(num){
    for(key in num){
        if(typeof num[key] == "number")
        num[key] = num[key] * 2;
    }
}
console.log(num);