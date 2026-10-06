const history = [];

function add(num1, num2) {
    const result = num1 + num2;
    addToHistory(num1, `+`, num2, result);
    return result;
}

function subtract(num1, num2) {
    const result = num1 - num2;
    addToHistory(num1, `-`, num2, result);
    return result;
}

function multiply(num1, num2) {
    const result = num1 * num2;
    addToHistory(num1, `*`, num2, result);
    return result;
}

function divide(num1, num2) {
    const result = num1 / num2;
    addToHistory(num1, `/`, num2, result);
    return result;
}

function displayHistory() {
    if (history.length === 0) {
        console.log(`No stored calculations.`);
        return;
    }
    for (let i = 0; i < history.length; i++) {
        const calc = history[i];
        console.log(`${calc.num1} ${calc.operator} ${calc.num2} = ${calc.result}`);
    }
}

function addToHistory(num1, operator, num2, result) {
    history.push({ num1, operator, num2, result });
}

displayHistory();

console.log(add(8, 3));
console.log(subtract(10, 4));
console.log(multiply(6, 7));
console.log(divide(20, 5));

displayHistory();