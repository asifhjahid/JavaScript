var num1 = 0.500000186302;
var num2 = -0.2;
var total = num1 + num2;

console.log(Math.abs(num2));
console.log(total.toFixed(3));
console.log((Math.random()*10).toFixed(3));

var date = new Date();
console.log(date.toLocaleDateString());

//while loop

let num = 10;
while (num<20){
    console.log(num);
    num=num+1;
}

//for loop

let nums = [30,40,50,60];

for(let i = 0; i<nums.length; i++){
    console.log(nums[i]);
}


//switch case

let firstName = 'asif';

switch(firstName){
    case "hasan":
        console.log('I am hasan');
        break;
    case 'asif':
        console.log('I am asif');
        break;
    default:
        console.log('Not found');
}