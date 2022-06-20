const prompt = require("prompt-sync")();
const score = 15;

while (score > 0 && score < 30) {
  const firstQuestion = prompt("What's the capital of Sweden?");
  if (firstQuestion == "Stockholm") {
    score = score + 5;
    console.log("You are right!");
    console.log("Your score is: " + score);
  } else {
    score = score - 5;
    console.log("You are wrong");
    console.log("Your score is: " + score);
  }

  const secondQuestion = prompt("What's the capital of Thailand?");
  if (secondQuestion == "Bangkok") {
    score = score + 5;
    console.log("You are right!");
    console.log("Your score is: " + score);
  } else {
    score = score - 5;
    console.log("You are wrong");
    console.log("Your score is: " + score);
  }

  const thirdQuestion = prompt("What is the capital of France?");
  if (thirdQuestion == "Paris") {
    score = score + 5;
    console.log("You are right!");
    console.log("Your score is: " + score);
  } else {
    score = score - 5;
    console.log("You are wrong");
    console.log("Your score is: " + score);
  }
  switch (score) {
    case 0:
      console.log("You lose!");
      break;
    case 30:
      console.log("You win!");
      break;
    default:
      console.log("Something went wrong!");
      break;
  }
}
