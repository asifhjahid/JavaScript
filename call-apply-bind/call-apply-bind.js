const person = {
    firstName:'Asif',
    lastName:'Hasan',
    salary:20000,
    fullName:function(){
        // console.log(this.firstName, this.lastName);
    },
    chargeBill:function(amount,tax){
        console.log(this);
        this.salary = this.salary - amount-tax;
        return this.salary;
    }
}

const person2 = {
    firstName:'Sabbir',
    lastName:'Hossain',
    salary:30000,
    
}

const person3 = {
    firstName:'Rayhan',
    lastName:'Shah',
    salary:25000,
    
}



// Using bind Method
 

const person2ChargeBill = person.chargeBill.bind(person2);
person2ChargeBill(2000);
person2ChargeBill(3000);
console.log(person2.salary);
console.log(person.salary);


const person3ChargeBill = person.chargeBill.bind(person3);
person3ChargeBill(1000);
console.log(person3.salary);







// Using Call Method

person.chargeBill.call(person2,1000,100);
console.log(person2.salary);






// Using apply Method


person.chargeBill.apply(person3,[2000,300])
console.log(person3.salary);