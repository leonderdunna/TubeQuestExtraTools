console.log('videoDetails.js geladen')

const vidID = new URLSearchParams(window.location.search).get('h')

console.log(document.querySelector('.watchtime-select').value)

localStorage.setItem(vidID+ 'dauer', document.querySelector('.watchtime-select').value)

let selector = document.querySelector('.watchtime-select')

selector.addEventListener('change', () => {
    localStorage.setItem(vidID+ 'dauer', selector.value)
    console.log(selector.value)
})