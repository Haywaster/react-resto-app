// Действия которые переходят в reducer

const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    }
}

export {
    menuLoaded
}