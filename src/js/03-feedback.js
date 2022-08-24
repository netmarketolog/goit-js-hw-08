import throttle from 'lodash.throttle'

const KEY_LOCALSTORAGE = 'feedback-form-state'
const inputObject = {}

const refs = {
    formBox: document.querySelector('.feedback-form'),
    inputEmail: document.querySelector('input'),
    textareaMessage: document.querySelector('textarea'),
    textInMemory: JSON.parse(localStorage.getItem(KEY_LOCALSTORAGE)),
}



refs.formBox.addEventListener('submit', onFormSubmit)
refs.textareaMessage.addEventListener('input', onTextareaSubmit)
    // refs.formBox.addEventListener('input', throttle(addToLocal, 500))

function onFormSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
}

function onTextareaSubmit(e) {
    const mes = e.currentTarget.value
    localStorage.setItem(KEY_LOCALSTORAGE, mes)

}