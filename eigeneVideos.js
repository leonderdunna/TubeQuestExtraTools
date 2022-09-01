console.log("eigeneVideos.js geladen")
let vids = document.querySelectorAll('.stream-box')

vids.forEach(vid => {
    let vidId = vid.querySelectorAll('a')[0].href.split('=')[1]
    // let vidName = vid.querySelectorAll('a')[0].querySelectorAll('.user-status-title')[0].textContent
    let vidDauer = localStorage.getItem(vidId + 'dauer')
    console.log({'vid': vidId, 'dauer': vidDauer})
    let dauerMarker = document.createElement("p")
    dauerMarker.textContent = Math.floor(vidDauer / 60 )+ ':' + vidDauer % 60
    if (vidDauer % 60 < 10) {
        dauerMarker.textContent = Math.floor(vidDauer / 60) + ':0' + vidDauer % 60
    }
    vid.querySelector('.stream-box-info').append(dauerMarker)
})