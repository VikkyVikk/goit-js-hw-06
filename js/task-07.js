const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

const fontSizeChange = () => {
    textEl.setAttribute('style', `font-size: ${inputEl.value}px`);
}

inputEl.addEventListener('input', fontSizeChange);