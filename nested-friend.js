const myScore = 80;
const friendScore = 80;

if (myScore > 80) {
  if (friendScore > 80) {
    console.log('Go for a lunch')
  }
  else if (friendScore < 80 && friendScore >= 60) {
    console.log('Good luck next time')
  }
  else if (friendScore < 60 && friendScore >= 40) {
    console.log('I will not see his message')
  }
  else if (friendScore < 40) {
    console.log('I will block my friend')
  }
}
else {
  console.log('I will go to home & sleep. I am feeling depressed')
}