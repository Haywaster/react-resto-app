// Работаем со Store и Action

const initialState = {
    menu: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED': 
            return {
                menu: action.payload            // Выполняем действие которое пришло к нам из action
            }
        default:
            return state
    }
}

export default reducer