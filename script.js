const buttons = document.querySelectorAll('button')
const display = document.querySelector('.display')

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        display.textContent = display.textContent + button.id
    })
})