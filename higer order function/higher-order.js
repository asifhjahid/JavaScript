// const radius = [3,1,2,4];

//Area of circle

// const calculateArea = function(radius){
//     const output=[];
//     for(let i=0; i<radius.length; i++){
//         output.push(Math.PI * radius[i] * radius[i])
//     }
//     return output;
// }

// console.log(calculateArea(radius));


// //Circumference of circle

// const calculateCircumference = function(radius){
//     const output=[];
//     for(let i=0; i<radius.length; i++){
//         output.push(2*Math.PI * radius[i])
//     }
//     return output;
// }

// console.log(calculateCircumference(radius));


// //Diameter of circle

// const calculateDiameter = function(radius){
//     const output=[];
//     for(let i=0; i<radius.length; i++){
//         output.push(2 * radius[i])
//     }
//     return output;
// }

// console.log(calculateDiameter(radius));







// Optimize the code


const radius = [3,1,2,4];

const area = function(radius){
    return Math.PI * radius * radius;
}

const circumference = function(radius){
    return 2*Math.PI *radius;
}

const diameter = function(radius){
    return 2*radius;
}

const calculate = function(radius,logic){
    const output = [];
    for(let i=0; i<radius.length;i++){
        output.push(logic(radius[i]));
    }
    return output;
}


//using map
console.log(radius.map(area));
console.log(radius.map(circumference));
console.log(radius.map(diameter));

console.log(calculate(radius,area));
console.log(calculate(radius,circumference));
console.log(calculate(radius,diameter));