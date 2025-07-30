const age = 13;
const student = true;
const seniorCitizen = false;
let ticketPrice = 800;

if (age < 10) {
  ticketPrice = 0;
  console.log('This is free for you, so you pay', ticketPrice);
} else if (student) {
  let discount = (ticketPrice * 50) / 100;
  let payAmount = ticketPrice - discount;
  console.log('You are a student. So you get 50% discount & you pay', payAmount)
} else if (seniorCitizen && age >= 60) {
  let discount = ticketPrice * 15 / 100;
  let payAmount = ticketPrice - discount;
  console.log('You are a senior citizen. So you get 15% discount & you pay', payAmount)
} 
else {
  console.log('You have to pay', ticketPrice)
}
