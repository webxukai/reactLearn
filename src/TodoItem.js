import React , { Component } from 'react';

 class TodoItem extends Component {
     constructor (props) {
         super(props);
         this.handleClick = this.handleClick.bind(this,)
     }
     render() {
         const { item} = this.props;
         return (
             <div onClick = {this.handleClick}>
                 {item}
             </div>
         )
     }
     handleClick () {
         const {handleDeletItem,index} = this.props;
         handleDeletItem(index)
        //  this.props.handleDeletItem(this.props.index)

     }
 }
 export default TodoItem