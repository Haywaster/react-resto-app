// Работаем со Store и Action

const initialState = {
    menu: [],
    loading: true,
    error: false
}

const reducer = (state = initialState, action) => {
    console.log(state)
    switch (action.type) {
        case 'MENU_LOADED': 
            return {
                menu: action.payload,            // Выполняем действие которое пришло к нам из action
                loading: false,
                error: false
            }
        case 'MENU_REQUESTED': 
            return {
                menu: state.menu,
                loading: true,
                error: false
            }
        case 'MENU_ERRORED': 
            return {
                menu: state.menu,
                loading: true,
                error: true
            }
        default:
            return state
    }
}

export default reducer