document.querySelector('.theme-dark').remove()

document.querySelector('html').append(document.createElement('body'))

body = document.querySelector('body');

body.append(document.createElement('h1'))

document.querySelector('h1').textContent = 'TubeQuest Extra Tools'

let kanalList = [];
let videoList = [];
blockedVideosList = [];

//Kanäle und Videos auslesen
{
    let kanalIDs = JSON.parse(localStorage.getItem('kanalIDs') || '[]');
    let vidIDs = JSON.parse(localStorage.getItem('vidIDs') || '[]');
    var blockedVideoIDs = JSON.parse(localStorage.getItem('blockedVideos') || '[]');


    for (let id of kanalIDs) {
        let kanal = {
            'id': id,
            'name': localStorage.getItem(id + 'name'),
            'count': localStorage.getItem(id)
        }
        kanalList.push(kanal)
    }

    for (let id of vidIDs) {
        let video = {
            'id': id,
            'name': localStorage.getItem(id + 'name'),
            'count': localStorage.getItem(id),
            'kanal': localStorage.getItem(id + 'kanal')
        }
        videoList.push(video)
    }
    for (let id of blockedVideoIDs) {
        let video = {
            'id': id,
            'name': localStorage.getItem(id + 'name'),
            'count': localStorage.getItem(id),
            'kanal': localStorage.getItem(id + 'kanal')
        }
        blockedVideosList.push(video)
    }
}

//Kanäle sortieren
kanalList = kanalList.sort((a, b) => {
    return b.count - a.count
})

//Videos sortieren
videoList = videoList.sort((a, b) => {
    return b.count - a.count
})

//Ausgabe der Kanäle
function kanalListItem(kanal) {

    let kanalDetails = document.createElement('details')

    let kanalSummary = document.createElement('summary')
    let count = document.createElement('span')
    count.textContent = kanal.count
    count.classList.add('nummer')
    let name = document.createElement('a')
    name.textContent = kanal.name
    name.classList.add('kanal-name')
    name.href = 'https://tubequest.de/profile?h=' + kanal.id
    kanalSummary.append(name)
    kanalSummary.append(count)

    kanalDetails.append(kanalSummary)

    for (let video of videoList) {
        if (video.kanal === kanal.id) {
            kanalDetails.append(videoListItem(video))
        }
    }

    return kanalDetails

}

//Ausgabe der Videos
function videoListItem(video, blocked = false) {
    let videoDiv = document.createElement('li')
    let count = document.createElement('span')
    count.textContent = video.count
    count.classList.add('nummer')
    let name = document.createElement('a')
    name.textContent = video.name
    name.target='second'
    name.classList.add('video-name')
    name.href = 'https://tubequest.de/view?h=' + video.id
    videoDiv.append(name)
    if (!blocked)
        videoDiv.append(count)

    if (blocked) {
        let unblock = document.createElement('button')
        unblock.textContent = 'Entsperren'
        unblock.classList.add('unblock')
        unblock.addEventListener('click', () => {
            blockedVideoIDs.splice(blockedVideosList.indexOf(video), 1)
            localStorage.setItem('blockedVideos', JSON.stringify(blockedVideoIDs))
            location.reload();
        })
        videoDiv.append(unblock)
    }
    return videoDiv
}



let globalStatisticsTitle = document.createElement('h2')
globalStatisticsTitle.textContent = 'Meine Statistiken'
body.append(globalStatisticsTitle)

let globalStatistics = document.createElement('div')
globalStatistics.classList.add('global-statistics')

let viewsGesamt = kanalList.map(
    kanal => kanal.count
).reduce((a, b) => {
    return (a - 0) + (b - 0)
})


let viesGesamtText = document.createElement('p')
viesGesamtText.textContent = 'Gesamt Views: ' + viewsGesamt

let kanäleGesamtText = document.createElement('p')
kanäleGesamtText.textContent = 'Gesehene Kanäle: ' + kanalList.filter(
    kanal => kanal.count > 0
).length


let videosGesamtText = document.createElement('p')
videosGesamtText.textContent = 'Gesehene Videos: ' + videoList.filter(
    video => video.count > 0
).length

ungeseheneVideos = videoList.filter(
    video => !(video.count > 0)
)
ungeseheneVideosText = document.createElement('p')
ungeseheneVideosText.textContent = 'Ungesehene Videos: ' + ungeseheneVideos.length
globalStatistics.append(ungeseheneVideosText)

globalStatistics.append(kanäleGesamtText)
globalStatistics.append(videosGesamtText)
globalStatistics.append(viesGesamtText)

body.append(globalStatistics)


let kanäleTitle = document.createElement('h2')
kanäleTitle.textContent = 'Kanäle'
body.append(kanäleTitle)

for (let kanal of kanalList) {
    body.append(kanalListItem(kanal))
}

let blockTitle = document.createElement('h2')
blockTitle.textContent = 'Blockliste'
if(blockedVideosList.length > 0)
body.append(blockTitle)

for (let video of blockedVideosList) {
    body.append(videoListItem(video, true))
}

let nichtZugeordnetTitle = document.createElement('h2')
nichtZugeordnetTitle.textContent = 'Nichtzugeordnete Videos'

    body.append(nichtZugeordnetTitle)

console.log(videoList)

for(let video of videoList){
    if(video.kanal === null){
        body.append(videoListItem(video, false))
    }
}

document.title = 'Extra Tools - TubeQuest'
