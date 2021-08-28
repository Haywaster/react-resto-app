// Получает данные с API

export default class RestoService {
    url = 'http://localhost:3000/test-menu'

    getMenuItems = async () => {
        const request = await fetch(this.url)
            if(!request.ok) {
                throw new Error ('An error has occurred')
            }
        const response = await request.json()
        return response
    }
}