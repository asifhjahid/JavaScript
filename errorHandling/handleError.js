try{
    console.log(`Brendan Eich created JavaScript in 1995`);
    console.log(a);
   
}catch(err){
    console.log(err);
    console.log(err.name);
    console.log(err.message);
}finally{
    console.log(`JavaScript is awesome`);  //finally block always work
}