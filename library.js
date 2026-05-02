// Run this in the console and it will generate variables for W, A, S and D
document.addEventListener('keydown', (event) => {
    if (["w","a","s","d"].includes(event.key)) {
        Calc.setExpression({id:event.code,latex:`K_{EYREADINGLIB${event.code}}=1`})
    }
});
document.addEventListener('keyup', (event) => {
    if (["w","a","s","d"].includes(event.key)) {
        Calc.setExpression({id:event.code,latex:`K_{EYREADINGLIB${event.code}}=0`})
    }
});
