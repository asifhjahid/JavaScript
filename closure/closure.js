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







function x(){
    for(var i=1; i<=5; i++){
        setTimeout(function(){
            console.log(i);
        }, i*1000);
    };
    console.log(`I love JavaScript`);
}
x();



function x(){
    for(var i=1; i<=5; i++){
       function closure(x){
        setTimeout(function(){
            console.log(x);
        }, i*1000);
       }
       closure(i)
    };
    console.log(`I love JavaScript`);
}
x();





function x(){
    for(let i=1; i<=5; i++){
        setTimeout(function(){
            console.log(i);
        }, i*1000);
    };
    console.log(`I love JavaScript`);
}
x();