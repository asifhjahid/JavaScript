const hasMeeting = false;

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

meeting
.then(addToCalendar)
.then(res=>console.log(res))
.catch(err=>console.log(err));