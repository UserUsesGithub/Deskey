// Run this in the console and it will make keys from VALUE into desmos variables
document.addEventListener('keydown', (event) => {
    if (VALUE.includes(event.key)) {
        Calc.setExpression({id:event.code,latex:`K_{EYREADINGLIB${event.code}}=1`})
    }
});
document.addEventListener('keyup', (event) => {
    if (VALUE.includes(event.key)) {
        Calc.setExpression({id:event.code,latex:`K_{EYREADINGLIB${event.code}}=0`})
    }
});
