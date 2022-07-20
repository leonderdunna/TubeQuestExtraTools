const vid = new URLSearchParams(window.location.search).get('h')
let wiederholung = false;
if (localStorage.getItem(vid) === null) {
    localStorage.setItem(vid, '1')
    localStorage.setItem(vid + 'zuletztGesehen', Date.now())
}
else {
    vidcount = localStorage.getItem(vid) - 0
    if ((localStorage.getItem(vid + 'zuletztGesehen') - 0) < (Date.now() - 86400000)) {
        localStorage.setItem(vid + 'zuletztGesehen', Date.now())
        localStorage.setItem(vid, ++vidcount)
    }
    else {
        wiederholung = true
    }
}

window.addEventListener('load', () => {
    if (localStorage.getItem('sammeln') === 'true')
        setInterval(() => {
            let successBtn = document.querySelector('button.button.primary.btn-done')
            //  console.log(successBtn.style.display)
            if (successBtn.style.display == 'block')
                successBtn.click()

            if (document.querySelector('div.btn-again-box').style.display != 'none')
                document.querySelector('span.highlighted.btn-again').click()

        }, 5000)


    if (localStorage.getItem('auswählen'))
        new Notification('TubeQuest', {
            body:'Ein neues Video kann nun angesehen werden :)'
        });

    if (wiederholung)
        return

    kanal = document.querySelector('a.button.small.twitch').href.split('=')[1]

    if (localStorage.getItem(kanal) === null)
        localStorage.setItem(kanal, '1')
    else {
        kanalcount = localStorage.getItem(kanal) - 0
        localStorage.setItem(kanal, ++kanalcount)
    }


})