export function upload(selector, {} = {}) {
    const input = document.querySelector(selector)

    const open = document.createElement('button')
    open.classList.add('btn')
    open.textContent = 'Открыть'

    if (options.multi) {
        input.setAttribute('multiple', true)
    }

    if (options.accept && Array.isArray(options.accept)) {
        input.serAttribute('accept', options.accept.join(','))
    }

    input.insertAdjacentElement('afterend', open)

    const triggerInput = () => input.click()

    const changeHandler = event => {
        console.log(event)
    }

    open.addEventListener('click', triggerInput)
    input.addEventListener('change', changeHandler)
}