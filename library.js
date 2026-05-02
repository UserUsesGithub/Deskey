// Run this in the console and it will generate variables for W, A, S and D
document.addEventListener('keydown', (event) => {
    if (["KeyW","KeyA","KeyS","KeyD"].includes(event.code)) {
        Calc.setExpression({id:event.code,latex:`K_{EYREADINGLIB${event.code}}=1`})
    }
});
document.addEventListener('keyup', (event) => {
    if (["KeyW","KeyA","KeyS","KeyD"].includes(event.code)) {
        Calc.setExpression({id:event.code,latex:`K_{EYREADINGLIB${event.code}}=0`})
    }
});
