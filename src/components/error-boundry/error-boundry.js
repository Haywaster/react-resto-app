// Boundry - граница. Дословно - граница ошибки

import React, {Component} from 'react';
import Error from '../error';

export default class ErrorBoundry extends Component {

    state = {
        error: false
    }

    componentDidCatch() {               // Вот он отлавливает ошибку (Сatch - ловить)
        this.setState({error: true})
    }

    render() {
        const {error} = this.state

        if(error) {
            return <Error/>
        }
       
        return this.props.children      // Показываем на странице все, что нах-ся внутри компонента ErrorBoundry
    }
}