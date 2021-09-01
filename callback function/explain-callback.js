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