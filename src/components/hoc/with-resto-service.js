// Прячем часть реализации и скрываем другие компоненты
// Скрываем использования Consumer'a (Потребителя), который получает пропсы от Provider

import React from 'react';
import RestoServiceContext from '../resto-service-context';

const WithRestoService = () => (Wrapped) => {
    return (props) => {
        return (
            <RestoServiceContext.Consumer>
                {                                   //Функциональный метод создания контекста
                    (RestoService) => {
                        return <Wrapped {...props} RestoService={RestoService}/>
                    }
                }
            </RestoServiceContext.Consumer>
        )
    }
};

export default WithRestoService;