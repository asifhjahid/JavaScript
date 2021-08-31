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

//basic function

function inchToFeet(inch) {
  let feet = inch / 12;
  return feet;
}

console.log(inchToFeet(200).toFixed(2));
console.log(inchToFeet(156));
console.log(inchToFeet(100).toFixed(2));
