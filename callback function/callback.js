// callback Function

setTimeout(function(){
    console.log('Java');
},3000);

function x(y){
    console.log('x')
    y()
}
x(function y(){
    console.log('y');
});



// Event Listeners

function attachEvent(){
    let count=0;
    document.getElementById('callMe')
    .addEventListener('click', function xyz(){
    console.log(`Button clicked`,++count);
});
}
attachEvent();