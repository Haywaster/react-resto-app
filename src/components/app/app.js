import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import WithRestoService from '../hoc/'
import { Route, Switch } from 'react-router-dom';

import Background from './food-bg.jpg';

const App = ({RestoService}) => {
    RestoService.getMenuItems()
        .then(res => console.log(res))
        .catch(() => console.log('Произошла ошибка'))
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader total={50}/>
            <Switch>
                <Route exact path="/"><MainPage/></Route>
                <Route path="/cart"><CartPage/></Route>
            </Switch>
        </div>
    )
}

export default WithRestoService()(App);