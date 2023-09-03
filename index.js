const submitForm = document.querySelector('#email-form');
const input = document.querySelector('#e-mail')
const warningMessage = document.querySelector('#warning');
const errorIcon = document.querySelector('#icon-error')

submitForm.addEventListener('submit', (e) => {
    const email = input.value
    if (!validateEmail(email)) {
        warningMessage.textContent = "Please provide a valid email !"
        errorIcon.style.display = 'block'
        e.preventDefault()
        input.style.borderColor = 'red'
    }
})

function validateEmail(email) {
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    return emailRegex.test(email)
}

console.log(validateEmail(sex))
