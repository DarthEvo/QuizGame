
var score = 15;

while (score > 0 && score < 30) {
    var firstQuestion = prompt("What's the capital of Sweden?");
    if (firstQuestion == "Stockholm") {
        score = score + 5;
        confirm("You are right!");
        console.log("Your score is: " + score);
    } else {
        score = score - 5;
        confirm("You are wrong");
        console.log("Your score is: " + score);
    }

    var secondQuestion = prompt("What's the capital of Thailand?");
    if (secondQuestion == "Bangkok") {
        score = score + 5;
        confirm("You are right!");
        console.log("Your score is: " + score);
    } else {
        score = score - 5;
        confirm("You are wrong");
        console.log("Your score is: " + score);
    }

var thirdQuestion = prompt("What is the capital of France?");
if (thirdQuestion == "Paris") {
    score = score + 5;
    confirm("You are right!");
    console.log("Your score is: " + score);
} else {
    score = score - 5;
    confirm("You are wrong");
    console.log("Your score is: " + score);
}
switch (score) {
    case 0:
        alert("You lose!");
        break;
    case 30:
        alert("You win!");
        break;
    default:
        alert("Something went wrong!");
        break;
}
}