var num1 = 2;

function sum(){
    var num2 = 4;
    var num3 = 5;
    return function (){
        return num1 + num2;
    }
}

console.dir(sum());