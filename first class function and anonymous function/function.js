
a();
b();

// Function Statement
function a(){
    console.log(`Javascript`);
}

// Function Expression

var b = function(){
    console.log(`JavaScript`);
}

// Function Declaration and Function Statement are same

function a(){
    console.log(`Javascript`);
}

// Anonymous Function

function(){

}

// Named Function Expression

var b = function abc(){
    console.log(`JavaScript is awesome`);
}



// First class Function
var b = function abc(param1,param2){
    console.log(param1,param2);
}

b(1,2)




var b = function abc(param1){
    console.log(param1);
}

b(function(){

})




var b = function abc(param1){

    return function abc(){

    }

}

console.log(b());


// First class Function and first class Citizens are same