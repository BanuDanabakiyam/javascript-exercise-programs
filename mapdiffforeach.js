// *********** difference between foreach vs map *********************************

const num = [1,2,3,4,5];
const mapResult = num.map((num) => {
    return num + 10;
});
console.log(mapResult);
console.log(num); /// the original array doesnot change

const num1 = [1,2,3,];
const forEachReasult = num1.forEach((nums,i) => {
    num1[i] = nums * 0;
});
console.log(forEachReasult);
console.log(num1); ///foreach change original array.it does not return any array.
