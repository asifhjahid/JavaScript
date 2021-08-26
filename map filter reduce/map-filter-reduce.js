
//Map Function

const arr = [5,1,3,2,6];

//Double - [10,2,6,4,12];
//Triple - [15,3,9,6,18];
//Binary - ["101","1","11","10","110"]


// double
const output = arr.map((double)=> double * 2);
console.log(output);                            

// //Triple
const output2 = arr.map((triple)=> triple * 3);
console.log(output2);                            

// //Binary
const output3 = arr.map((binary)=> binary.toString(2));
console.log(output3);      



//filter Function


// //filter odd valued

const oddValue = arr.filter((odd)=> odd % 2 != 0);
console.log(oddValue);




//reduce Function


//Find Sum 

// use normal function
function findSum(arr){
    let sum = 0;
    for(let i=0; i<arr.length;i++){
        sum = sum + arr[i];
    }
    return sum;
}
console.log(findSum(arr));


//use reduce funtion

const sumOfArray= arr.reduce((accu,cur)=>{
    accu = accu + cur;
    return accu;
},0)

console.log(sumOfArray);


//Find Max

//normal function

function findMax(arr){
    let max = 0;
    for(let i=0; i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i]
        }
       
    }
    return max;
}
console.log(findMax(arr));




//reduce function

const findMaxNum = arr.reduce((max,cur)=>{
    if(cur>max){
        max = cur;
    }
    return max;
},0)

console.log(findMaxNum);



//Examples

const users=[
    {firstName:"Asif", lastName:"Hasan",age:26},
    {firstName:"Sabbir", lastName:"Hossain",age:24},
    {firstName:"Rayhan", lastName:"Parvez",age:26},
    {firstName:"Faisal", lastName:"Mahmud",age:30},

]

// list of fullName
//["Asif Hasan", Sabbir Hossain]

const fullName = users.map((name)=>name.firstName + " " + name.lastName)
console.log(fullName);



//{ age 26 = 2 people, 24 = 1, 30 = 1 }

const findOutput = users.reduce((acc,cur)=>{
    if(acc[cur.age]){
        acc[cur.age] = ++acc[cur.age]
    }
    else{
        acc[cur.age] = 1;
    }
    return acc;
},{})

console.log(findOutput);


//firstName all the people whose ages < 28
//"Asif", "Sabbir","Rayhan"

const findAge = users.filter((x)=>x.age<30).map((x)=>x.firstName)
console.log(findAge);