import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import { connect } from 'react-redux';
import WithRestoService from '../hoc';
import {menuLoaded, menuRequested, menuErrored, addedToCart} from '../../actions'
import Spinner from '../spinner'
import Error from '../error';

import './menu-list.scss';

class MenuList extends Component {

    componentDidMount() {
        this.props.menuRequested()

        const {RestoService} = this.props
        RestoService.getMenuItems()
            .then(res => this.props.menuLoaded(res))
            .catch(res => this.props.menuLoaded(res) )
    }

    render() {
        const {menuItems, loading, error, addedToCart} = this.props;
        if (error){
            return <Error/>
        }
        if (loading) {
            return <Spinner/>
        }
        const items = menuItems.map(menuItem => {
                return (
                    <MenuListItem 
                        key = {menuItem.id} 
                        menuItem = {menuItem}
                        onAddToCart={() => addedToCart(menuItem.id)}/>
                )
            })

        return (
            <View items = {items}/> 
            )
    }
};

// При помощи этой функции мы получаем данные из reducer'a, т.е массив с карточками, который потом переходит в пропсы и дальше по сценарию выше

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error
    }
}

// Связывает action и reducer по сути. Полученные с сервера данные отправляем в store далее в reducer

const mapDispatchToProps = {
    menuLoaded,
    menuRequested,
    menuErrored,
    addedToCart
}

const View = ({items}) => {
    return (
        <ul className="menu__list">
            {items}
        </ul>
    ) 
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));