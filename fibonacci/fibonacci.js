// fibonac[2] = fibonac[2-1] + fibonac[2-2];
// fibonac[3] = fibonac[3-1] + fibonac[3-2];
// fibonac[4] = fibonac[4-1] + fibonac[4-2];
// fibonac[5] = fibonac[5-1] + fibonac[5-2];
// fibonac[n] = fibonac[n-1] + fibonac[n-2];
// fibonac[i] = fibonac[i-1] + fibonac[i-2];


//iterative way

// for loop

let fibonac = [0,1];

for(let i= 2; i<= 10; i++){
        fibonac[i] = fibonac[i-1] + fibonac[i-2];
        // console.log(fibonac[i], fibonac[i-1], fibonac[i-2]);
}
console.log(fibonac);


//function

function fibonacci(n){
    let fibo = [0,1];
    for(let i=2; i<=n; i++){
        fibo[i]= fibo[i-1] + fibo[i-2];
    }
    return fibo;
}

let fibonaResult = fibonacci(10);
console.log(fibonaResult);




//recursive way

function recursiveFibo(n){
    if(n==0){
        return 0;
    }
    else if(n==1){
        return 1;
    }
    else{
        return recursiveFibo(n-1) + recursiveFibo(n-2);
    }
    
}

let recursiveFiboResult = recursiveFibo(10);
console.log(recursiveFiboResult);



function fiboseries(n){
    if(n==0){
        return [0]
    }
    else if(n==1){
        return [0,1]
    }
    else{
        let fibonacc = fiboseries(n-1);
        let nextFibo = fibonacc[n-1] + fibonacc[n-2];
        fibonacc.push(nextFibo);
        return fibonacc;
    }

}

let fiboResult = fiboseries(10);
console.log(fiboResult);