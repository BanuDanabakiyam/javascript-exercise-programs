// function x (){
//     var i = 1;
//     setTimeout(function (){
//         console.log(i); // this is closure
//     },5000);
//     console.log("poda punnaku dinesha");
// }
// x();


//******************************************************* */
// function x(){
//     for(var i = 1 ; i <= 5 ; i++){ // let is block scope and create every new copy
//         setTimeout(function (){
//                    console.log(i); // this is closure
//                  }, i * 1000);
                 

//     }
// }
// x();


//********************************************************** */

// function x(){
//     for(var i = 1 ; i <= 5 ; i++){
//         function close(x){
//             setTimeout(function (){
//                  console.log(x); // this is closure
//               }, x * 1000);
//         }
//         close(i);
//     }
    
// }
// x();


function x(){
    for(var i = 1 ; i <= 5 ; i++){
        function close(a){
            setTimeout(function (){
                 console.log(i); // this is closure
              }, i * 1000);
        }
        close(i);
    }
    
}
x();