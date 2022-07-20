window.addEventListener('load', () => {

    if (localStorage.getItem('boost') === '') {
        let boosted = document.getElementsByClassName('boosted')
   //     console.log(boosted)
        if (boosted.length == 4)
            for (let i = 0; i < 4; i++) {
                boosted[0].remove()
            }
    }

    if (localStorage.getItem('top') === '')
        document.getElementsByClassName('grid-3-3-3-3')[0].remove()

    let kanalList =[];

    let vids = document.getElementsByClassName('product-preview')

    for (let vid of vids) {
        let vidId = vid.childNodes[1].href.split('=')[1]
        let vidCount;
        //   console.log(vidId)

        if (localStorage.getItem(vidId) === null)
            vidCount = 0
        else
            vidCount = localStorage.getItem(vidId)

        let kanalId = vid.childNodes[5].childNodes[1].childNodes[1].href.split('=')[1]

        let kanalCount;

        if (localStorage.getItem(kanalId) === null)
            kanalCount = 0
        else
            kanalCount = localStorage.getItem(kanalId)

        //  let kanalCount=


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

        if(localStorage.getItem('kanalStat')==='true')
        vid.childNodes[5].appendChild(kanal)

        kanalList.push({
            'kanal':kanalId,
            'kanalCount':kanalCount,
            'link':'https://tubequest.de/view?h='+vidId
        })
    }

    kanalList = kanalList.sort((a,b)=>{
        return a.kanalCount -b.kanalCount
    })
    //console.log(kanalList)
    if(localStorage.getItem('auswählen'))
    location.href= kanalList[0].link
})

