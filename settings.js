function generateSettingsItem(title, description, storageID, defaultValue) {
    console.log(defaultValue)


    let formRow = document.createElement('div');
    formRow.classList.add('form-row');

    let formItem = document.createElement('div');
    formItem.classList.add('form-item');

    let switchOption = document.createElement('div');
    switchOption.classList.add('switch-option');

    let switchOptionTitle = document.createElement('p');
    switchOptionTitle.textContent = title;
    switchOptionTitle.classList.add('switch-option-title');

    let switchOptionDescription = document.createElement('p');
    switchOptionDescription.textContent = description;
    switchOptionDescription.classList.add('switch-option-text');

    let formSwitch = document.createElement('div');
    formSwitch.classList.add('form-switch');
    formSwitch.dataField = 'testInput';

    let formSwitchButton = document.createElement('div');
    formSwitchButton.classList.add('form-switch-button');

    if (localStorage.getItem(storageID) === 'true') {
        formSwitch.classList.add('active');
    } else if (localStorage.getItem(storageID) === 'false') {
        formSwitch.classList.remove('active');
    } else {
        localStorage.setItem(storageID, defaultValue)
        if (defaultValue === true) {
            formSwitch.classList.add('active');
        }
        if (defaultValue === false) {
            formSwitch.classList.remove('active');
        }
    }


    formSwitch.addEventListener('click', () => {
        if (formSwitch.classList.contains('active')) {
            formSwitch.classList.remove('active')
            localStorage.setItem(storageID, 'false')
            console.log('aus')
        } else {
            formSwitch.classList.add('active')
            localStorage.setItem(storageID, 'true')
            console.log('an')
        }

    })

    formSwitch.appendChild(formSwitchButton)

    switchOption.appendChild(switchOptionTitle)
    switchOption.appendChild(switchOptionDescription)
    switchOption.appendChild(formSwitch)

    formItem.appendChild(switchOption)

    formRow.appendChild(formItem)

    return formRow;
}

window.addEventListener('load', () => {
    let box = document.createElement('div')
    box.classList.add('widget-box')

    let boxTitel = document.createElement('a')
    boxTitel.classList.add('widget-box-title')
    boxTitel.textContent = 'Extra Tools'
    boxTitel.href = 'https://tubequest.de/extratools';

    let boxInhalt = document.createElement('div')
    boxInhalt.classList.add('widget-box-content')


    //Alles zusammenwürfeln


    boxInhalt.appendChild(generateSettingsItem(
        'Klick-Zähler',
        'Fügt in der Videoliste zu jedem Video einen Zähler ein, der anzeigt, wie oft dieses Video bereits angesehen wurde',
        'vidStat',
        false))
    boxInhalt.appendChild(generateSettingsItem(
        'Kanal Klick-Zähler',
        'Fügt in der Videoliste zu jedem Video einen Zähler ein, der anzeigt, wie oft bereits ein Video dieses Kanals angesehen wurde',
        'kanalStat',
        false))
    boxInhalt.appendChild(generateSettingsItem(
        'Top Watcher',
        'In der Videoliste die 3 Top Watcher anzeigen',
        'top',
        true))
    boxInhalt.appendChild(generateSettingsItem(
        'geboostete Videos',
        'Zu beginn der Videoliste die 4 geboosteten Videos anzeigen',
        'boost',
        false))
    boxInhalt.appendChild(generateSettingsItem(
        'Automatisch Sammeln',
        'Bei einem fertig angesehenen Video automatisch die Coins einsammeln (Ist ein Video beendet und die Zeit noch nicht um, wird das Video automatisch erneut gespielt)',
        'sammeln',
        false))
    boxInhalt.appendChild(generateSettingsItem(
        'Automatisch Auswählen',
        'In der Videoliste automatisch ein Video von dem Kanal mit den wenigsten Aufrufen auswählen',
        'auswählen',
        false))
    boxInhalt.appendChild(generateSettingsItem(
        'Benachrrichtigung',
        'Push Benachrrichtigung an den Browser und eine GET Request an "https://localhost:8080" senden, wenn ein Video bereit ist',
        'notification',
        false))
    boxInhalt.appendChild(generateSettingsItem(
        'Autocomplete',
        'Zeigt bei Kommentaren eine Liste mit Vorschlägen an',
        'autocomplete',
        true))


    box.appendChild(boxTitel)
    box.appendChild(boxInhalt)
    document.querySelector('div.grid.grid-3-9.medium-space').appendChild(
        document.createElement('div'))
    document.querySelector('div.grid.grid-3-9.medium-space').appendChild(box)

})