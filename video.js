const vid =new URLSearchParams(window.location.search).get('h')

if(localStorage.getItem(vid) === 0)
   localStorage.setItem(vid,'0')
 else{
 vidcount = localStorage.getItem(vid) -0
     localStorage.setItem(vid,++vidcount)
 }

window.addEventListener('load',()=>{

    
kanal = document.querySelector('a.button.small.twitch').href.split('=')[1]  

    if(localStorage.getItem(kanal) === 0)
   localStorage.setItem(kanal,'0')
 else{
 kanalcount = localStorage.getItem(kanal) -0
     localStorage.setItem(kanal,++kanalcount)
 }

})