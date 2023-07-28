var coinFlip = Math.round(Math.random());
var choice = window.prompt("Would you like heads or tails?");

if (coinFlip) { //HEADS
    window.prompt(coinFlip);
    if (choice === "heads") {
        //window.prompt(coinFlip );
        window.document.write("The flip was heads and you chose heads...you win!");
    } else {
        //window.prompt(coinFlip);
        window.document.write("The flip was heads and you chose tails...you lose!");
    }
} else { //TAILS
    if (choice === "heads") {
        //window.prompt(coinFlip);
        window.document.write("The flip was tails and you chose heads...you lose!");
    } else {
        //window.prompt(coinFlip);
        window.document.write("The flip was tails and you chose tails...you win!");
    }
}