let currentInput = '';

function pressKey(key) {
    const display = document.getElementById('display');
    if (key === 'C') {
        currentInput = '';
        display.value = '0';
    } else {
        currentInput += key;
        display.value = currentInput;
    }
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(currentInput);
        currentInput = display.value;
    } catch (e) {
        display.value = 'Error';
        currentInput = '';
    }
}
