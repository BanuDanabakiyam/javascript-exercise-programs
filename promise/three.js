const thakkal = new Promise((resolve, reject) => {//define promise
    let bookingSuccessful = false;
    if(bookingSuccessful)
    resolve(1000);
    else
    reject();
});

thakkal.then((amount) =>{
    console.log(`Thanks i will transfer Rs. ${amount} amount`);
})
.catch(function faliure()  {
    console.log("Sorry the ticket rejected");
});//use promise




