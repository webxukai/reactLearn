import React, { Component ,Fragment} from 'react';
import { CSSTransition } from 'react-transition-group';
// http://reactcommunity.org/react-transition-group/css-transition
import './style.css'

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      show:true
    }
  }
  render () {
    return (
      <Fragment>
        <CSSTransition in={this.state.show} timeout={200} classNames="my-node">
          <div className = {this.state.show ? 'show' : 'hide'}>hello</div>
        </CSSTransition>
        <button onClick = {this.handleTogg.bind(this)}>切换</button>
      </Fragment>
    )
  }
  handleTogg () {
    this.setState({
      show: !this.state.show
    })
  }
}

export default App;
