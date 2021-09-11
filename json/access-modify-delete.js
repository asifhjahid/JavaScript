

let data = require('./friends-data.json');
console.log(data);

//access data
let name = data.myFriends[0].firstName; 
let language = data.myFriends[0].language[0];
console.log(name);
console.log(language);


//modify data

let changeName =data.myFriends[0].friends[1].name="Faisal";
console.log(changeName);


//delete data 

delete data.myFriends[0].firstName;
delete data.myFriends[0].friends[1].name;

console.log(data);
