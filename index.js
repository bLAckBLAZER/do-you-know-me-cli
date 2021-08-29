var readlineSync = require('readline-sync');
const chalk = require('chalk');
 
// Wait for user's response.

var userName = readlineSync.question(chalk.bgRed('May I have your name? '));
console.log('Hi ' + userName + '!');

questionOne = {
  question: "What is Omkar's favourite anime?",
  answer: "naruto"
}
questionTwo = {
  question: "What is Omkar's favourite sit-com?",
  answer: "friends"
}
questionThree = {
  question: "Who is Omkar's favourite character in Naruto?",
  answer: "minato"
}
questionFour = {
  question: "Which year did Omkar graduated?",
  answer: "2020"
}
questionFive = {
  question: "In which field has Omkar done his engineering?",
  answer: "computer science"
}
questionSix = {
  question: "In which city does Omkar live?",
  answer: "thane"
}


topScorers = [
  {
    name:"Omkar",
    score: 6
  },
  {
    name:"Naruto",
    score:5
  },
  {
    name:"Kakashi",
    score:3
  },
  {
    name:"Sakura",
    score:0
  }
]

questions = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix];
score = 0;
for( let i=0; i< questions.length; i++){
  var receivedAns = readlineSync.question(questions[i].question+" ");
  if (receivedAns.toLowerCase() === questions[i].answer){
    console.log("Correct!");
    score+=1
  }
  else{
    console.log('Wrong Answer! Correct answer is: '+questions[i].answer);
    
  }
  // console.log("Current score: "+score)
}

console.log("Your total score: " + score);

console.log()
console.log("******************************")
console.log("You have beaten:");
for(let i=0;i<topScorers.length;i++){
  if (topScorers[i].score < score){
    console.log(topScorers[i].name)
  }
}
console.log("******************************")

