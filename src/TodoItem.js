import React , { Component } from 'react';
import PropTypes from 'prop-types'

 class TodoItem extends Component {
     constructor (props) {
         super(props);
         this.handleClick = this.handleClick.bind(this,)
     }
     componentWillReceiveProps() {
        // 在子组件中child
    }
     render() {
         const { item} = this.props;
         return (
             <div onClick = {this.handleClick}>
                 {item}
             </div>
         )
        //  return React.creacteElement('div',{},item) 底层原理
     }
     handleClick () {
         const {handleDeletItem,index} = this.props;
         handleDeletItem(index)
        //  this.props.handleDeletItem(this.props.index)

     }
 }
//  类型校验
 TodoItem.propTypes = {
     item:PropTypes.oneOfType([PropTypes.number,PropTypes.string]).isRequired,
     handleDeletItem:PropTypes.func,
     index:PropTypes.number

 }
 //默认值
 TodoItem.defaultProts = {
    item: 'item'
 }

 export default TodoItem