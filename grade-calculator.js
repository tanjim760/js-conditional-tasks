const result = 100;

if (result >= 90 && result <= 100) {
  console.log('You got A');
} else if (result >= 80 && result <= 89) {
  console.log('You got B');
} else if (result >= 70 && result <= 79) {
  console.log('You got C');
} else if (result >= 60 && result <= 69) {
  console.log('You got D');
} else if (result >= 0 && result <= 59) {
  console.log('You got F');
}
else {
  console.log("You didn't attend exam")
}