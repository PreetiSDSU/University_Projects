var coinFlip;
do {
    coinFlip = Math.round(Math.random());
    if (coinFlip) {
        window.document.write("Heads<br>");
        window.console.log("Head")
    } else {
        window.document.write("You finally got tails...game over!");
        window.console.log("Tail")
    }
} while (coinFlip);