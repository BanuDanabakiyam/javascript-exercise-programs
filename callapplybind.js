// ------------------- call/apply/bind -----------------------

// Each and every function in javascript is access to this keyword.

let obj = {
    firstName:"Banu", // properties of object
    lastName:"Dinesh",
    printFullName:function(){
     console.log(this.firstName+" "+this.lastName);
    }
}
obj.printFullName();




let obj1 = {
    firstName:"Banu", // properties of object
    lastName:"Dhanabakiyam",
    printFullName:function(){
     console.log(this.firstName+this.lastName); // not good way again using function this place we do call back.
    }
}
obj1.printFullName();

//----------------------------------------  call -------------------------------------

//using call method we do function borrowing.

let obj2 = {
    firstName:"Banu", // properties of object
    lastName:"sekar",
}
obj.printFullName.call(obj2);   // FUNCTION BORROWING.
//(referenceobject.whichfunction we call/call method/(passing object as a parameter)).
function printname(){
    console.log("inside printname" , this.firstName + this.lastName);
}
printname.call(obj);

//***********************------------------------ another one method for call ******************* */
// let nam1 = {
//     firstName:"Balamurugan",
//     lastName:"Manju"
// }
// let print = function(hometown,state)
// {
//     console.log(this.firstName+this.lastName+" from " + hometown + " in " + state + " state");
// }
// let nam2 = {
//     firstName:"Dhanabakiyam",
//     lastName:"Sekar"
// }

// print.call(nam1,"Madurai","Tamilnadu");
// print.call(nam2,"kaniyakumari","Tamilnadu");
//          // (first argument reference to this keyword , 2 argument is function's argument).


//          //***************************** apply method **************** */

//          // The only way difference between call and apply method is passing arguments.
//          // In call method we passing function's argument is individually
//          // but In call method we passing function's argument is listargument.

//          let app1 = {
//             firstName:"sami",
//             lastName:"amman"
//          }

//          let obj3 = function(city,pincode){
//             console.log(this.firstName + " " + this.lastName + " from " + city + " city " + pincode );
//          }

//          obj3.apply(app1,["Tiruppur","641607"]);//list of arguments.


//          // ************** bind method ******************

//          // It will create copy of object and bind together with arguments and it return a function.
//          // so that when we want call that time we called.
//         console.log("**********************\n");

//          let bins = {
//             firstName1:"helo",
//             lastName1:"hai",
//          }

//          let printFullName = function(hometown){
//             console.log(hometown);
//             console.log(this.firstName1 + " " + this.lastName1 + " " +hometown);
//          }
//          printFullName("coimbatore");
         
//          console.log("\n");
//          let printMyName = printFullName.bind(bins,"Mumbai");//it return method then we call later.
//          printMyName();
         

        //  class a{
        //     string firstname = "banu"
        //     string lastname = "priyani"
        //    print2(){ this.firstname + this.lastname;

      //  }
        //  }
        //  int result = new a();
        //  string ab = result.firstName;
        //  strig cd = result.lastName;
        //  // public string print(string firstname,string lastname){
        //     // return system.out.println(firstname + lastname);
        //     //print(ab,cd);
        //  }
         