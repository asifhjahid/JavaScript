
//slice method

let names = "Asif, Hasan, Jahid ";
let name1 = names.slice(6,11);
let name2 = names.slice(-6,-1);
console.log(name1);              //print Hasan
console.log(name2);              //print Jahid

//substring method
//substring() is similar to slice()
//The difference is that substring() cannot accept negative indexes.

let name3 = names.substring(13,18);
console.log(name3);              //print Jahid


//substr method

let name4 = names.substr(6,5);
console.log(name4);             //print Hasan


let numbers = "12346";
let number = numbers.substr(-1,numbers.length-1);
console.log(number);


// replace method

let text = 'I love JavaScript';
let newText = text.replace('JavaScript','React.js')
console.log(text);             // don't modify the original string
console.log(newText);


//concat method 

let text1 = 'JavaScript'
let text2 = 'Python'
let fullText = text1.concat(text2);
// let fullText = text1.concat(` ${text2}`);
console.log(fullText);


//trim method 
//The trim() method removes whitespace from both sides of a string:


let text4 = "         Asif            ";

// console.log(text4);
console.log(text4.trim());




//split method
// A string can be converted to an array with the split() method

let text5 = 'JavaScript is awesome';
console.log(text5.split(''));