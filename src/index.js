import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Provider } from 'react-redux'                                      // Чтобы каждый компонент узнал о store и его обновление изменило структуру приложения
import { BrowserRouter as Router } from 'react-router-dom';                 // Маршрутизация
import ErrorBoundry from './components/error-boundry'                       // Граница ошибок
import RestoService from './services/resto-service'
import RestoServiceContext from './components/resto-service-context'        //  Чтобы каждый компонент узнал о сущ-и restoService и если захотел получил бы свойства благодаря Consumer
import store from './store'

import './index.scss';

const restoService = new RestoService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <RestoServiceContext.Provider value={restoService}>
                <Router> 
                    <App/>
                </Router>
            </RestoServiceContext.Provider>
        </ErrorBoundry>
    </Provider>
    , document.getElementById('root'));

