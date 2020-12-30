import React, {Component} from "react";
import ReactDOM from "react-dom";
import MyApp from "./MyApp";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            flag: true
        }
    }
    remove() {
        console.log("remove")

        this.setState({
            flag: !this.state.flag
        })

        // 原生JS获取DOM节点
        // document.getElementById("myapp");

        // 获取的是虚拟的DOM节点对象
        ReactDOM.findDOMNode(document.getElementById("myapp"));

        // refs  获取真实的DOM节点对象
    }

    render() {
        return(
            <div>
                <button onClick={this.remove.bind(this)}>移除组件</button>

                {/* {this.state.flag ? <MyApp /> : ""} */}
                {this.state.flag && <MyApp id="100"/>}
                
            </div>
        );
    }
}

export default App;