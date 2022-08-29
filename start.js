window.addEventListener('load', () => {
    console.log(document.querySelectorAll('input'))
    document.querySelectorAll('input').forEach(input => {
        input.setAttribute('autocomplete', 'off')
    })
    console.log('loaded')
})
console.log('hallo')