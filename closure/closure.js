function x(){
    var a = 4; // a = 4 is closure
    function y(){
        console.log(a);
    }
    y();
}
x();



// return a function

function x(){
    var a = 4; 
    function y(){
        console.log(a);
    }
    return y;
}
var z = x();
console.log(z);
z(); // invoke z and print 4



function x(){
        var a = 4; 
        function y(){
            console.log(a);
        }
        var a =100;
        return y;
    }
    var z = x();
    console.log(z);
    z(); 




function z(){
    var b = 4;
    function x(){
        var a = 9;
        function y(){
            console.log(a,b);
        }
        y();
    }
    x();
}
z();