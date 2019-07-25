import React, { Component, Fragment } from 'react';
import './style.css'
import TodoItem from './TodoItem';

class TodoListComp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
    }
    render() {
        return (
            <Fragment>
                {/* 注释 */}
                <div>
                    {/* htmlFor='insertArea' == for */}
                    <label htmlFor='insertArea'>输入内容</label>
                    <input
                        id='insertArea'
                        className='input'
                        value={this.state.inputValue}
                        onChange={this.handleInputChange.bind(this)}
                    ></input>
                    <button onClick={this.handleBtnClick.bind(this)}>提交</button>
                </div>
                <div>
                    {/* dangerouslySetInnerHTML = {{__html:item}}不转译内容 */}
                    <ul>{
                        this.getTodoItem ()
                    }</ul>
                </div>

            </Fragment>
        )
    }
    getTodoItem () {
        return    this.state.list.map((item, index) => {
            return <TodoItem key ={index} item={item} index={index} handleDeletItem={this.handleDeletItem.bind(this)}></TodoItem>
        })
    }
    handleInputChange(e) {
        let value = e.target.value
        this.setState(() =>( {
            inputValue: value
        }))
        // this.setState({
        //     inputValue: e.target.value
        // })
    }
    handleBtnClick() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })

    }
    handleDeletItem(index) {
        console.log(index)
        const list = [...this.state.list];
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }
}
export default TodoListComp