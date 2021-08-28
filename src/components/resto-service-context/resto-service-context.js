// Создаем контекст, который нужен для распространения сервиса на все компоненты в иерархии через Provider и Consumer

import React from 'react'

const RestoServiceContext = React.createContext()

export default RestoServiceContext