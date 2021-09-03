function explainCallback(name,country,play){
    console.log(`name  : `, name);
    console.log(`country : `, country);
    play();

}

function cricket(){
    console.log(`play cricket`);
}
function football(){
    console.log(`play football`);
}

explainCallback('Shakib','Bangladesh',cricket);
explainCallback('Messi','Argentina',football);




//added new callback function


function welcome(name,handler){
    handler(name);
}

function goodNoon(name){
    console.log(`goodNoon`,name);
}

// function goodEvening(name){
//     console.log(`goodEvening`,name);
// }

welcome('asif',goodNoon);

welcome('hasan',function(name){
    console.log(`goodEvening`,name);
})