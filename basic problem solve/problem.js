// let a = 10;
// let b = 20;

// [b,a] = [a,b];

// console.log(a,b);



// let num = 4.01823403474;
// console.log(Math.floor(num));
// console.log(Math.ceil(num));
// console.log(Math.round(num));
// console.log(Math.round(Math.random(num)*10));


// for(let n=1; n<=10; n++){
//     console.log(Math.round(Math.random(num)*10));
// }




//maximum value

let num1 = 200;
let num2 = 600;
let num3 = 500;

if( num1 > num2 && num1> num3){
    console.log(`${num1} is a maximum number`);
}
else{
    if(num2>num1 && num2 > num3){
        console.log(`${num2} is a maximum number`);
    }
    else{
        console.log(`${num3} is a maximum number`);
    }
}


//Math.max

let maxValue = Math.max(num1,num2,num3);
console.log(maxValue);


//Array maximum value

let arr = [20,30,10,90,40,4,70];
let maxNum = arr[0];
for(let i=0; i<=arr.length;i++){
    let newElement = arr[i];
    if(newElement>maxNum){
        maxNum = newElement;
    }
}
console.log(maxNum);


//sum 

function sumOfValue(number){
    var sum = 0;
    for(let i =0; i<number.length; i++){
        var sum = sum + number[i];
        //  console.log(sum);
    }
    return sum;
}

let result = sumOfValue([3,2,5,2,8]);
console.log(result);



// white space count

let speech = 'I    love JavaScrip';
let count = 0;
for(let i=0; i<speech.length;i++){
    let char = speech[i];
    if(char == ' ' && speech[i-1] !=''){
        count++;
    }
  
}
console.log(count);



//reverse string

function reversestring(str){
    let reverse = '';
    for(let i=0; i<str.length;i++){
        let char = str[i];
        reverse = char + reverse;
        // console.log(reverse);
    }
    return reverse;
}

let reverseResult = reversestring('javaScript is awesome');
console.log(reverseResult);




// feet to mile

function feetToMile(feet){
    let mile = feet / 5280;
    return mile;
}

let resultMile = feetToMile(10000);
console.log(resultMile);



