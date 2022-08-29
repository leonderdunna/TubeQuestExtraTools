window.addEventListener('load', () => {


        //Geboostete ausblenden
        if (localStorage.getItem('boost') === 'false') {
            console.log(localStorage.getItem('boost'))
        }
        let boosted = document.getElementsByClassName('boosted')
        //     console.log(boosted)

        for (let i = 0; boosted.length != 0; i++) {
            console.log(boosted)
            boosted[0].remove()

        }


//Top 3 ausblenden
        if (localStorage.getItem('top') === 'false') {
            document.getElementsByClassName('grid-3-3-3-3')[0].remove()
        }
        let kanalList = [];

        let vids = document.getElementsByClassName('product-preview')

        let kanalIDs = [];
        let vidIDs = [];

        //aktionen für jedes video
        for (let vid of vids) {
            let vidId = vid.childNodes[1].href.split('=')[1]
            vidIDs.push(vidId)

            let kanalId = vid.childNodes[5].childNodes[1].childNodes[1].href.split('=')[1]
            kanalIDs.push(kanalId)

            let kanalName = vid.childNodes[5].childNodes[1].childNodes[5].textContent
            localStorage.setItem(kanalId + 'name', kanalName)

            let vidName = vid.childNodes[3].childNodes[3].childNodes[0].textContent
            localStorage.setItem(vidId + 'name', vidName)
            localStorage.setItem(vidId + 'kanal', kanalId)

            let vidCount;
            //   console.log(vidId)

            if (localStorage.getItem(vidId) === null)
                vidCount = 0
            else
                vidCount = localStorage.getItem(vidId)


            let kanalCount;

            if (localStorage.getItem(kanalId) === null)
                kanalCount = 0
            else
                kanalCount = localStorage.getItem(kanalId)


            let p = document.createElement('p')
            p.classList.add('text-sticker')
            p.classList.add('gesehen')
            p.textContent = vidCount

            if (localStorage.getItem('vidStat') === 'true')
                vid.childNodes[3].appendChild(p)

            let kanal = document.createElement('p')
            kanal.classList.add('text-sticker')
            kanal.classList.add('kanal')
            kanal.classList.add('gesehen')
            kanal.textContent = kanalCount

            if (localStorage.getItem('kanalStat') === 'true')
                vid.childNodes[5].appendChild(kanal)

            kanalList.push({
                'kanal': kanalId,
                'kanalCount': kanalCount,
                'vidCount': vidCount,
                'link': 'https://tubequest.de/view?h=' + vidId,
                'id': vidId
            })
        }

        kanalList = kanalList.filter(
            e => {
                let blockedVideos = JSON.parse(localStorage.getItem('blockedVideos') || '[]')
                return !blockedVideos.includes(e.id)
            }
        ).sort((a, b) => {
            if (a.kanalCount === b.kanalCount)
                return a.vidCount - b.vidCount;
            return a.kanalCount - b.kanalCount
        })


        //kanalListe und vid liste im speicher aktualisieren
        {
            kanalIDs.push(...JSON.parse(localStorage.getItem('kanalIDs') || '[]'))
            vidIDs.push(...JSON.parse(localStorage.getItem('vidIDs') || '[]'))

            kanalIDs = [...new Set(kanalIDs)]
            vidIDs = [...new Set(vidIDs)];

            localStorage.setItem('kanalIDs', JSON.stringify(kanalIDs))
            localStorage.setItem('vidIDs', JSON.stringify(vidIDs))
        }


        //console.log(kanalList)
        if (localStorage.getItem('auswählen') === 'true') {
            location.href = kanalList[0].link
        }

    }
)

