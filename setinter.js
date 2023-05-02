let count = 0;
const output = setInterval(() =>{
    console.log("Hai js")
    count++;
    if(count == 5){
        console.log("Execution stop after 5 seconds");
        clearInterval(output);
    }
},1000);