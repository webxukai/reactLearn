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

    componentWillMount() {
        // 只会在第一次挂载执行
        console.log('componentWillMount')
    }
    componentDidMount() { // ajax 正常在这里执行
        // 只会在第一次挂载执行
        console.log('componentDidMount')
    }
    shouldComponentUpdate(nextProps,nextState) { // 可以提升性能
        // 数据变更后执行,要求返回Boolean类型，返回false表示不要更新，后面的生命周期不会执行
        console.log('shouldComponentUpdate')
        if(nextProps.item !== this.props.item) {
            return true
        } else {
            return true
        }

    }
    componentWillUpdate () {
        // shouldComponentUpdate只有返回true才执行
    }
    componentDidUpdate () {
        // 组件更新完成之后会执行
    }
    componentWillReceiveProps() {
        // 在子组件中father
        // 子组件第一次执行时候不执行componentWillReceiveProps
        //一个组件从父组件接收参数
        // 只要父组件的render被重新执行了，componentWillReceiveProps就会执行
    }
    componentWillUnmount () {
        // 当子组件即将被移出之后执行
    }
    // 当state和props发生变化时，render()就会重新执行
    render() {  // 其他生命周期在compontent中内置，只有render不内置
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
                        ref = {(input) => {this.input = input}}
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
        // let valve = this.input
        let value = e.target.value
        this.setState(() =>( {
            inputValue: value
        }
        // ,() => {
        //     // 执行完setState的回调函数
        //     // console.log(111)
        // }
        ))
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