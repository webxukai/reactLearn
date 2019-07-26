import React from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Input, List, Button } from 'antd';
const NewAppUI = (props) => { // 无状态组件
    return (
        <div>

            <div>
                <Input placeholder="B内容" value={props.inputValue} onChange={props.handleInputChange.bind(this)} />
                <Button onClick={props.handleBtnClick.bind(this)}>Default</Button>
            </div>
            <List
                size="small"
                bordered
                dataSource={props.list}
                renderItem={(item, index) => <List.Item onClick={(index) => { props.handleItemClick(index) }}>{item}</List.Item>}
            />

        </div>
    )
}

// class NewAppUI extends Component {
//     render() {
//         return (
//             <div>

//                 <div>
//                     <Input placeholder="B内容" value={this.props.inputValue} onChange={this.props.handleInputChange.bind(this)} />
//                     <Button onClick={this.props.handleBtnClick.bind(this)}>Default</Button>
//                 </div>
//                 <List
//                     size="small"
//                     bordered
//                     dataSource={this.props.list}
//                     renderItem={(item, index) => <List.Item onClick={(index) => { this.handleItemClick(index) }}>{item}</List.Item>}
//                 />

//             </div>
//         )
//     }
// }
export default NewAppUI;