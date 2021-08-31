

//factorial

// 5!=5*4*3*2*1
// 5! = 1*2*3*4*5


//iterative way


//using for loop

let factorial = 1;
for (let i = 1; i <= 5; i++) {
  factorial = factorial * i;
  console.log(i, factorial);
}

//useing while loop

let fact = 1;
let i = 1;
while(i<=5){
    fact = fact * i;
    console.log(i,fact);
    i++;
}



//useing function

function factorialValue(n) {
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial = factorial * i;
    
  }
  return factorial;
}

let result = factorialValue(5);
console.log(result);


//recursive way
// 0! = 1;
// 4! = 1*2*3*4
// 5! = 4!*5 || (5-1)*5
// n! = (n-1)*n
// 5! = 5*4*3*2*1 | 1*2*3*4*5



function recursiveFact(n){
    if(n==0){
        return 1
    }
    else{
        return n * recursiveFact(n-1)
    }
}

let finalResult = recursiveFact(5)
console.log(finalResult);
