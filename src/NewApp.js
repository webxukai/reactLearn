import React, { Component } from 'react';

import { getImputChangeAction, getAddItemAction, getDeleteTodoItem } from './store/actionCreators';

import {NewAppUI } from './NewAppUI'

import store from './store/index'
console.log(NewAppUI)

class NewApp extends Component {
    constructor(props) {
        super(props);
        console.log(store)
        // 订阅store的改变
        store.subscribe(this.handleStoreChange.bind(this))
        this.state = store.getState()
    }
    render() {
        const list = this.state.list
        const inputValue = this.state.inputValue
        return (
            <NewAppUI
                inputValue={inputValue}
                list={list}
                handleInputChange={this.handleInputChange.bind(this)}
                handleBtnClick={this.handleBtnClick.bind(this)}
            ></NewAppUI>

        )
    }
    handleInputChange(e) {
        // const action = {
        //     type: CHANGE_INPUT_VALUE,
        //     value:e.target.value
        // }
        const action = getImputChangeAction(e.target.value)
        store.dispatch(action)
    }
    handleStoreChange() {
        this.setState(
            store.getState
        )
    }
    handleBtnClick() {
        // const action = {
        //     type: ADD_TODO_ITEM
        // }
        const action = getAddItemAction()
        store.dispatch(action)
    }
    handleItemClick(index) {
        // const action = {
        //     type: DELETE_TODO_ITEM,
        //     index
        // }
        const action = getDeleteTodoItem(index)
        store.dispatch(action)
    }
}
export default NewApp