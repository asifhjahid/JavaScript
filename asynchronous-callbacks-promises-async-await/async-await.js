// function friendlyFunction(){
//     return Promise.resolve(`Hello`)   //return promise
// }
// console.log(friendlyFunction());

// async function friendlyFunction(){
//     return (`Hello`)  //return promise
// }
// console.log(friendlyFunction());


const hasMeeting = true;

const meeting = new Promise((resolve,reject)=>{
    if(!hasMeeting){
        const meetingDetails = {
            name:'Technical Meeting',
            location:'Google Meet',
            time:'9.00pm'
        }
        resolve(meetingDetails);
    }
    else{
        reject(new Error(`meeting already scheduled`))
    }
})

const addToCalendar =(meetingDetails)=>{
    return new Promise((resolve,reject)=>{
        const calendar =`${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
        resolve(calendar)
    })
}


async function myFunction(){
    try{
        const meetingDetails = await meeting;
        const calendar = await addToCalendar(meetingDetails);
        console.log(calendar);
    }
    catch{
        console.log(`Something wrong`);
    }
}
myFunction();