const age = 70;
const ticket = 800;
const student = false;
if(age <= 10){
    console.log('free ticket')
}
else if(student){
    const discount = ticket * 50 /  100;
    pay = ticket - discount;
    console.log (pay);
}
else if(age >= 60){
    const discount = ticket * 15 / 100;
    pay = ticket - discount;
    console.log(pay);
}
else{
    console.log(ticket)
}