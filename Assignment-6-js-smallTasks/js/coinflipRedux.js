var coinFlip;
var i;
for (i = 1; i <= 10; i += 1) {
    coinFlip = Math.round(Math.random());
    //window.prompt(coinFlip)
    //window.prompt(i)
    if (coinFlip) {
        //window.prompt(coinFlip)
        window.console.log("Heads");
    } else {
        window.console.log("Tails");
    }
}