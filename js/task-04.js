const buttonDecrement = document.querySelector(
    '#counter button[data-action="decrement"]',
);
const buttonIncrement = document.querySelector(
    '#counter button[data-action="increment"]',
);
const value = document.querySelector('#value');

let counterValue = 0;

const decrement = () => {
    value.textContent = counterValue -= 1;
}

const increment = () => {
    value.textContent = counterValue += 1;
}

buttonIncrement.addEventListener('click', increment);
buttonDecrement.addEventListener('click', decrement);