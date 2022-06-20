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
