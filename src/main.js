// 1. Initialize the counter starting value
let count = 0;

// 2. Select the HTML elements using their IDs
const display = document.getElementById('display');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');
const increaseBtn = document.getElementById('increase');

// 3. Define what happens when buttons are clicked
increaseBtn.addEventListener('click', () => {
    count++;
    display.textContent = count;
});
decreaseBtn.addEventListener('click', () => {
    count--;
    display.textContent = count;
});
resetBtn.addEventListener('click', () => {
    count = 0;
    display.textContent = count;
});