var num1 = 0.500000186302;
var num2 = -0.2;
var total = num1 + num2;

console.log(Math.abs(num2));
console.log(total.toFixed(3));
console.log((Math.random() * 10).toFixed(3));

var date = new Date();
console.log(date.toLocaleDateString());

//lenght

let myName = "Asif Hasan Jahid";
console.log(myName.length);

//if else

let year = 2032;
if (year % 4 == 0) {
  console.log(`${year} is leap year`);
} else {
  console.log(`Not leap year`);
}

//while loop

let num = 10;
while (num < 20) {
  console.log(num);
  num = num + 1;
}

//for loop

let nums = [30, 40, 50, 60];

for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}

//switch case

let firstName = "asif";

switch (firstName) {
  case "hasan":
    console.log("I am hasan");
    break;
  case "asif":
    console.log("I am asif");
    break;
  default:
    console.log("Not found");
}

//basic function

function inchToFeet(inch) {
  let feet = inch / 12;
  return feet;
}

console.log(inchToFeet(200).toFixed(2));
console.log(inchToFeet(156));
console.log(inchToFeet(100).toFixed(2));

//leap year

function checkLeapYear(year) {
  if ((year % 4 == 0 && year % 100 != 0) | (year % 400 == 0)) {
    console.log(`${year} is a leap year`);
  } else {
    console.log(`${year} is not a leap year`);
  }
}

checkLeapYear(2052);
checkLeapYear(2030);



//iterative way



//factorial

// 5!=5*4*3*2*1
// 5! = 1*2*3*4*5

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

