if (localStorage.getItem('autocomplete') === 'false') {

    window.addEventListener('load', () => {
        setTimeout(() => {
            console.log(document.querySelectorAll('input'))
            document.querySelectorAll('input').forEach(input => {
                input.setAttribute('autocomplete', 'off')
            })
            console.log('loaded')
        },100)
    })
    console.log('hallo')
}