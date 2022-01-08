const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const formElement = event.currentTarget.elements;
    const email = formElement.email.value;
    const password = formElement.password.value;
    const formValue = { email, password };
    if (email === '' || password === '') {
        alert('все поля обязательны для заполнения');
    } else {
        console.log(formValue);
    }

    loginForm.reset();
}