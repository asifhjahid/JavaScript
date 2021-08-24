
//  console.log(myName);
//  myName();
//  console.log(a);
//  var a = 9;

// function myName(){
//      console.log(`JavaScript is awesome!`);
//  }



myName()
console.log(a);
console.log(myName); 

var a = 10;

 function myName2(){
     console.log(`JavaScript is awesome!`);
 }

var myName=()=>{
    console.log(`JavaScript is awesome!`);
}




var a = 10;

 function myName2(){
     console.log(`JavaScript is awesome!`);
 }
 myName2()
console.log(a);
console.log(myName2);




// var vs let & const hoisting

var nam1 = 'Asif';
var nam2 = 'Hasan';

function myName(){
    // var nam2;
    if(!nam2){
     var nam2 = nam1;
    }
    return nam2;
}
console.log(`My name is ${myName()}`);


// let nam1 = 'Asif';
// let nam2 = 'Hasan';

// function myName(){
//     if(!nam2){
//         // let nam2;
//         let nam2 = nam1;
//     }
//     return nam2;
// }
// console.log(`My name is ${myName()}`);