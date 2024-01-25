/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    return number1 + number2;
}

/* Function Expression - Subtract Numbers */
function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    let sum = add(addNumber1, addNumber2);
    document.querySelector('#sum').value = sum;
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

const subtractNumbers = function() {
    let subtract1 = Number(document.querySelector('#subtract1').value);
    let subtract2 = Number(document.querySelector('#subtract2').value);
    let difference = subtract1 - subtract2;
    document.querySelector('#difference').value = difference;
};

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    let product = factor1 * factor2;
    document.querySelector('#product').value = product;
};

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divideNumbers = function() {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    let quotient = dividend / divisor;
    document.querySelector('#quotient').value = quotient;
};

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
document.querySelector('#getTotal').addEventListener('click', function() {
    let subtotal = Number(document.querySelector('#subtotal').value);
    let isMember = document.querySelector('#member').checked;
    let total = isMember ? subtotal * 0.8 : subtotal; // Apply a 20% discount if the user is a member
    document.querySelector('#total').textContent = `$ ${total.toFixed(2)}`;
});

/* ARRAY METHODS - Functional Programming */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

/* Output Source Array */
document.querySelector('#array').textContent = numbersArray.join(', ');

/* Output Odds Only Array */
let oddsArray = numbersArray.filter(number => number % 2 !== 0);
document.querySelector('#odds').textContent = oddsArray.join(', ');

/* Output Evens Only Array */
let evensArray = numbersArray.filter(number => number % 2 === 0);
document.querySelector('#evens').textContent = evensArray.join(', ');

/* Output Sum of Org. Array */
let sumOfArray = numbersArray.reduce((sum, number) => sum + number, 0);
document.querySelector('#sumOfArray').textContent = sumOfArray;

/* Output Multiplied by 2 Array */
let multipliedArray = numbersArray.map(number => number * 2);
document.querySelector('#multiplied').textContent = multipliedArray.join(', ');

/* Output Sum of Multiplied by 2 Array */
let sumOfMultipliedArray = multipliedArray.reduce((sum, number) => sum + number, 0);
document.querySelector('#sumOfMultiplied').textContent = sumOfMultipliedArray;