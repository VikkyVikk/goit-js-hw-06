const input = document.querySelector('#validation-input');
const inputValidation = input.dataset.length;

const borderColor = (event) => {
    return event.target.value.length == inputValidation ?
        input.setAttribute('class', 'valid') :
        input.setAttribute('class', 'invalid');
}

input.addEventListener('blur', borderColor);