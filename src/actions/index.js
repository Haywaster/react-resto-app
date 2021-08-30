// Действия которые как-то переходят в reducer

const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    }
}

const menuRequested = () => {
    return {
        type: 'MENU_REQUESTED'
    }
}

const menuErrored = () => {
    return {
        type: 'MENU_ERRORED'
    }
}

export {
    menuLoaded,
    menuRequested,
    menuErrored
}