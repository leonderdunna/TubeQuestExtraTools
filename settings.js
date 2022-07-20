window.addEventListener('load', () => {
    let box = document.createElement('div')
    box.classList.add('widget-box')

    let boxTitel = document.createElement('p')
    boxTitel.classList.add('widget-box-title')
    boxTitel.textContent = 'Extra Tools'

    let boxInhalt = document.createElement('div')
    boxInhalt.classList.add('widget-box-content')


  



    //BEGINN EinstellungsItem
    let vidStatFormRow = document.createElement('div')
    vidStatFormRow.classList.add('form-row')

    let vidStatFormItem = document.createElement('div')
    vidStatFormItem.classList.add('form-item')

   
    let vidStatSwitchOption = document.createElement('div')
    vidStatSwitchOption.classList.add('switch-option')

    let vidStatSwitchOptionTitle = document.createElement('p')
    vidStatSwitchOptionTitle.classList.add('switch-option-title')
    vidStatSwitchOptionTitle.textContent = 'Klick Zähler'

    let vidStatSwitchOptionText = document.createElement('p')
    vidStatSwitchOptionText.classList.add('switch-option-text')
    vidStatSwitchOptionText.textContent = 'Fügt in der Videoliste zu jedem Video einen Zähler ein, der anzeigt, wie oft dieses Video bereits angesehen wurde'

    let vidStatFormSwitch = document.createElement('div')
    vidStatFormSwitch.classList.add('form-switch')
    vidStatFormSwitch.dataField = 'testInput'

    let vidStatFormSwitchButton = document.createElement('div')
    vidStatFormSwitchButton.classList.add('form-switch-button')

    if(localStorage.getItem('vidStat')==='true')
        vidStatFormSwitch.classList.add('active')

    vidStatFormSwitch.addEventListener('click',()=>{
        if(vidStatFormSwitch.classList.contains('active')){
            vidStatFormSwitch.classList.remove('active')
            localStorage.setItem('vidStat','')
            console.log('aus')
        } else{
            vidStatFormSwitch.classList.add('active')
            localStorage.setItem('vidStat','true')    
            console.log('an')
        }

    })


    vidStatFormSwitch.appendChild(vidStatFormSwitchButton)

    vidStatSwitchOption.appendChild(vidStatSwitchOptionTitle)
    vidStatSwitchOption.appendChild(vidStatSwitchOptionText)
    vidStatSwitchOption.appendChild(vidStatFormSwitch)

    vidStatFormItem.appendChild(vidStatSwitchOption)

    vidStatFormRow.appendChild(vidStatFormItem)
    //ENDE EintsllungsItem



    //BEGINN EinstellungsItem
    let kanalStatFormRow = document.createElement('div')
    kanalStatFormRow.classList.add('form-row')

    let kanalStatFormItem = document.createElement('div')
    kanalStatFormItem.classList.add('form-item')

    let kanalStatInput = document.createElement('input')
    kanalStatInput.classList.add('testInput')
    kanalStatInput.name = 'testInput'
    kanalStatInput.type = 'hidden'
    kanalStatInput.value = 0 //TODO

    let kanalStatSwitchOption = document.createElement('div')
    kanalStatSwitchOption.classList.add('switch-option')

    let kanalStatSwitchOptionTitle = document.createElement('p')
    kanalStatSwitchOptionTitle.classList.add('switch-option-title')
    kanalStatSwitchOptionTitle.textContent = 'Kanal Klick Zähler'

    let kanalStatSwitchOptionText = document.createElement('p')
    kanalStatSwitchOptionText.classList.add('switch-option-text')
    kanalStatSwitchOptionText.textContent = 'Fügt in der Videoliste zu jedem Video einen Zähler ein, der anzeigt, wie oft bereits ein Video dieses Kanals angesehen wurde'

    let kanalStatFormSwitch = document.createElement('div')
    kanalStatFormSwitch.classList.add('form-switch')
    kanalStatFormSwitch.dataField = 'testInput'

    let kanalStatFormSwitchButton = document.createElement('div')
    kanalStatFormSwitchButton.classList.add('form-switch-button')

    if(localStorage.getItem('kanalStat')==='true')
        kanalStatFormSwitch.classList.add('active')

    kanalStatFormSwitch.addEventListener('click',()=>{
        if(kanalStatFormSwitch.classList.contains('active')){
            kanalStatFormSwitch.classList.remove('active')
            localStorage.setItem('kanalStat','')
            console.log('aus')
        } else{
            kanalStatFormSwitch.classList.add('active')
            localStorage.setItem('kanalStat','true')    
            console.log('an')
        }

    })


    kanalStatFormSwitch.appendChild(kanalStatFormSwitchButton)

    kanalStatSwitchOption.appendChild(kanalStatSwitchOptionTitle)
    kanalStatSwitchOption.appendChild(kanalStatSwitchOptionText)
    kanalStatSwitchOption.appendChild(kanalStatFormSwitch)

    kanalStatFormItem.appendChild(kanalStatInput)
    kanalStatFormItem.appendChild(kanalStatSwitchOption)

    kanalStatFormRow.appendChild(kanalStatFormItem)
    //ENDE EintsllungsItem


    //BEGINN EinstellungsItem
    let topFormRow = document.createElement('div')
    topFormRow.classList.add('form-row')

    let topFormItem = document.createElement('div')
    topFormItem.classList.add('form-item')

    let topInput = document.createElement('input')
    topInput.classList.add('testInput')
    topInput.name = 'testInput'
    topInput.type = 'hidden'
    topInput.value = 0 //TODO

    let topSwitchOption = document.createElement('div')
    topSwitchOption.classList.add('switch-option')

    let topSwitchOptionTitle = document.createElement('p')
    topSwitchOptionTitle.classList.add('switch-option-title')
    topSwitchOptionTitle.textContent = 'Top Watcher'

    let topSwitchOptionText = document.createElement('p')
    topSwitchOptionText.classList.add('switch-option-text')
    topSwitchOptionText.textContent = 'In der Videoliste die 3 Top Watcher anzeigen'

    let topFormSwitch = document.createElement('div')
    topFormSwitch.classList.add('form-switch')
    topFormSwitch.dataField = 'testInput'

    let topFormSwitchButton = document.createElement('div')
    topFormSwitchButton.classList.add('form-switch-button')

    if(localStorage.getItem('top')!=='')
        topFormSwitch.classList.add('active')

    topFormSwitch.addEventListener('click',()=>{
        if(topFormSwitch.classList.contains('active')){
            topFormSwitch.classList.remove('active')
            localStorage.setItem('top','')
            console.log('aus')
        } else{
            topFormSwitch.classList.add('active')
            localStorage.setItem('top','true')    
            console.log('an')
        }

    })

    topFormSwitch.appendChild(topFormSwitchButton)

    topSwitchOption.appendChild(topSwitchOptionTitle)
    topSwitchOption.appendChild(topSwitchOptionText)
    topSwitchOption.appendChild(topFormSwitch)

    topFormItem.appendChild(topInput)
    topFormItem.appendChild(topSwitchOption)

    topFormRow.appendChild(topFormItem)
    //ENDE EintsllungsItem


    //BEGINN EinstellungsItem
    let boostFormRow = document.createElement('div')
    boostFormRow.classList.add('form-row')

    let boostFormItem = document.createElement('div')
    boostFormItem.classList.add('form-item')

    let boostInput = document.createElement('input')
    boostInput.classList.add('testInput')
    boostInput.name = 'testInput'
    boostInput.type = 'hidden'
    boostInput.value = 0 //TODO

    let boostSwitchOption = document.createElement('div')
    boostSwitchOption.classList.add('switch-option')

    let boostSwitchOptionTitle = document.createElement('p')
    boostSwitchOptionTitle.classList.add('switch-option-title')
    boostSwitchOptionTitle.textContent = 'geboostete Videos'

    let boostSwitchOptionText = document.createElement('p')
    boostSwitchOptionText.classList.add('switch-option-text')
    boostSwitchOptionText.textContent = 'Zu beginn der Videoliste die 4 geboosteten Videos anzeigen'

    let boostFormSwitch = document.createElement('div')
    boostFormSwitch.classList.add('form-switch')
    boostFormSwitch.dataField = 'testInput'

    let boostFormSwitchButton = document.createElement('div')
    boostFormSwitchButton.classList.add('form-switch-button')

    if(localStorage.getItem('boost')!=='')
        boostFormSwitch.classList.add('active')

    boostFormSwitch.addEventListener('click',()=>{
        if(boostFormSwitch.classList.contains('active')){
            boostFormSwitch.classList.remove('active')
            localStorage.setItem('boost','')
            console.log('aus')
        } else{
            boostFormSwitch.classList.add('active')
            localStorage.setItem('boost','true')    
            console.log('an')
        }

    })

    boostFormSwitch.appendChild(boostFormSwitchButton)

    boostSwitchOption.appendChild(boostSwitchOptionTitle)
    boostSwitchOption.appendChild(boostSwitchOptionText)
    boostSwitchOption.appendChild(boostFormSwitch)

    boostFormItem.appendChild(boostInput)
    boostFormItem.appendChild(boostSwitchOption)

    boostFormRow.appendChild(boostFormItem)
    //ENDE EintsllungsItem



    //BEGINN EinstellungsItem
    let sammelnFormRow = document.createElement('div')
    sammelnFormRow.classList.add('form-row')

    let sammelnFormItem = document.createElement('div')
    sammelnFormItem.classList.add('form-item')

    let sammelnInput = document.createElement('input')
    sammelnInput.classList.add('testInput')
    sammelnInput.name = 'testInput'
    sammelnInput.type = 'hidden'
    sammelnInput.value = 0 //TODO

    let sammelnSwitchOption = document.createElement('div')
    sammelnSwitchOption.classList.add('switch-option')

    let sammelnSwitchOptionTitle = document.createElement('p')
    sammelnSwitchOptionTitle.classList.add('switch-option-title')
    sammelnSwitchOptionTitle.textContent = 'Automatisch sammeln'

    let sammelnSwitchOptionText = document.createElement('p')
    sammelnSwitchOptionText.classList.add('switch-option-text')
    sammelnSwitchOptionText.textContent = 'Bei einem fertig angesehenen Video automatisch die Coins einsammeln'

    let sammelnFormSwitch = document.createElement('div')
    sammelnFormSwitch.classList.add('form-switch')
    sammelnFormSwitch.dataField = 'testInput'

    let sammelnFormSwitchButton = document.createElement('div')
    sammelnFormSwitchButton.classList.add('form-switch-button')

    if(localStorage.getItem('sammeln')==='true')
        sammelnFormSwitch.classList.add('active')

    sammelnFormSwitch.addEventListener('click',()=>{
        if(sammelnFormSwitch.classList.contains('active')){
            sammelnFormSwitch.classList.remove('active')
            localStorage.setItem('sammeln','')
            console.log('aus')
        } else{
            sammelnFormSwitch.classList.add('active')
            localStorage.setItem('sammeln','true')    
            console.log('an')
        }

    })

    sammelnFormSwitch.appendChild(sammelnFormSwitchButton)

    sammelnSwitchOption.appendChild(sammelnSwitchOptionTitle)
    sammelnSwitchOption.appendChild(sammelnSwitchOptionText)
    sammelnSwitchOption.appendChild(sammelnFormSwitch)

    sammelnFormItem.appendChild(sammelnInput)
    sammelnFormItem.appendChild(sammelnSwitchOption)

    sammelnFormRow.appendChild(sammelnFormItem)
    //ENDE EintsllungsItem


    //Alles zusammenwürfeln

    boxInhalt.appendChild(vidStatFormRow)
    boxInhalt.appendChild(kanalStatFormRow)
    boxInhalt.appendChild(topFormRow)
    boxInhalt.appendChild(boostFormRow)
    boxInhalt.appendChild(sammelnFormRow)

    box.appendChild(boxTitel)
    box.appendChild(boxInhalt)
    document.querySelector('div.grid.grid-3-9.medium-space').appendChild(
        document.createElement('div'))
    document.querySelector('div.grid.grid-3-9.medium-space').appendChild(box)

})