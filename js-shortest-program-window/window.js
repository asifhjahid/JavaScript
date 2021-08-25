// what is global space ?

//Anything which is not inside any function is the global space;

var a = 10; //global space
function b(){
    var x = 20; //not global space 
}

console.log(a);
console.log(window.a);
console.log(this.a);
// console.log(x); //x is not global space