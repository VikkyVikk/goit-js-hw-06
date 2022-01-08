const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

const changeInput = (event) => {
    const value = event.target.value;
    outputName.textContent = value || 'Anonymous';

}

inputName.addEventListener('input', changeInput);