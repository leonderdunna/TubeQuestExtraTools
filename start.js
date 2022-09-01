if (localStorage.getItem('autocomplete') === 'false') {

    window.addEventListener('load', () => {
        setTimeout(() => {
            console.log(document.querySelectorAll('input'))
            document.querySelectorAll('input').forEach(input => {
                input.setAttribute('autocomplete', 'off')
            })
            console.log('loaded')
        }, 100)
    })
    console.log('hallo')
}
let alphabet = 'abcdefghijklmnopqrstuvwxyz'
kanalIDs = [];
vidIDs = [];

function suchen(buchstaben) {

    setTimeout(() => {
        $.post("search", {
            s: buchstaben[0] + buchstaben [1] + buchstaben[2]
        }, function (data) {
            if (data) {
                //    console.log(buchstaben + ' gefunden')

                $('.header-search-dropdown').html(data);
                $('.header-search-dropdown').css('display', 'block');

                //  console.log(document.querySelectorAll('.header-search-dropdown')[0])
                document.querySelectorAll('.header-search-dropdown a').forEach(a => {
                    /*         if (a.href.includes('profile')) {
                                 let kanalId = a.href.split('=')[1]
                                 let kanalName = a.querySelectorAll('.user-status-title')[0].textContent
                                 kanalIDs.push(kanalId)
                                 console.log({'kanal': kanalId, 'name': kanalName})
                                 localStorage.setItem(kanalId + 'name', kanalName)
                             }
                     */
                   // console.log(a)
                    if (a.href.includes('view')) {
                        let vidId = a.href.split('=')[1]
                        let vidName = a.querySelectorAll('.user-status-title')[0].textContent
                        let zahl = vidIDs.length
                        vidIDs.push(vidId)
                        // console.log({'vid': vidId, 'name': vidName})
                        localStorage.setItem(vidId + 'name', vidName)

                        kanalIDs.push(...JSON.parse(localStorage.getItem('kanalIDs') || '[]'))
                        vidIDs.push(...JSON.parse(localStorage.getItem('vidIDs') || '[]'))
                        kanalIDs = [...new Set(kanalIDs)]
                        vidIDs = [...new Set(vidIDs)];
                        //   console.log(kanalIDs)
                        if (vidIDs.length > zahl) {
                            console.log('neue vid gefunden')
                            console.log(vidNamekk)
                        }
                        //   console.log(vidIDs)

                        localStorage.setItem('kanalIDs', JSON.stringify(kanalIDs))
                        localStorage.setItem('vidIDs', JSON.stringify(vidIDs))
                    }
                })
            }
        });
    }, 0)

    if (buchstaben[0] == alphabet[25]) {
        buchstaben[0] = alphabet[0]
        if (buchstaben[1] == alphabet[25]) {
            buchstaben[1] = alphabet[0]
            console.log(buchstaben)
            if (buchstaben[2] == alphabet[25]) {
                buchstaben[2] = alphabet[0]
                return;
            } else {
                buchstaben[2] = alphabet[alphabet.indexOf(buchstaben[2]) + 1]
            }
        } else {
            buchstaben[1] = alphabet[alphabet.indexOf(buchstaben[1]) + 1]
        }
    } else {
        buchstaben[0] = alphabet[alphabet.indexOf(buchstaben[0]) + 1]
    }
    //console.log(buchstaben)
    setTimeout(() => {
        suchen(buchstaben)
    }, 50)
}

function alleHinzufügen() {

    let alphabet = 'abcdefghijklmnopqrstuvwxyz'

    for (let i, j, k, l, m, n = 0; ;) {

    }
}


window.addEventListener('load', () => {
    setTimeout(() => {
   //     suchen(['a', 'a', 'd'])
    }, 2000)
})