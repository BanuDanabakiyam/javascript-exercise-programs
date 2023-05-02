let names = [
    {name: 'Banupriya',rollNumber: '13MCA005',age: 27},
    {name: 'Dineshkumar',rollNumber: '13MCA006',age: 33},
    {name: 'Santhiya',rollNumber: '13MCA007',age: 35},
    {name: 'Deepa',rollNumber: '13MCA008',age: 40},
    {name: 'Abhisek',rollNumber: '13MCA009',age: 50}
];

// let arr = [];
// for(let i = 0 ; i < names.length ; i++){
//     arr.push(names[i].name.toUpperCase());

// }
// console.log(arr);

let arr = names.map((nam) => nam.name.toUpperCase());
console.log(arr);

let arr1 = names.filter((names) => names.age > 30);
console.log(arr1);

const number = names.reduce((acc,curr) => acc + curr.age,0);
console.log(number);

