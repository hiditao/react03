import React, {Component} from "react";

class MyApp extends Component {
    constructor(props) {
        super(props);

        // 定义变量
        this.timer = null;

        // 定义状态
        this.state = {
            date: new Date()
        }
    }
    componentWillMount() {
        console.log("will mount");
    }
   
    // 组件挂载成功时调用
    componentDidMount() {
        console.log("did mount");
        // 每隔1秒修改一次时间
        this.timer = setInterval(() => {
            this.setState({
                date: new Date()
            })
        }, 1000)
    }

     //在组件接收到一个新的 prop (更新后)时被调用
 	componentWillReceiveProps(newProps) {
        console.log('Component WILL RECEIVE PROPS!')
  	}
    //在组件接收到新的props或者state时被调用
  	shouldComponentUpdate(newProps, newState) {
        console.log("should update------" + this.state.date.getSeconds()%2);
        // 返回值决定组件要不要重新渲染，如果为true表示重新渲染，如果时false那么不渲染
        if(this.state.date.getSeconds()%2 === 0) {
            return true;
        } else {
            return false;
        }
  	}
    //在组件接收到新的props或者state但还没有render时被调用
  	componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
  	}
    //在组件完成更新后立即调用
  	componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
  	}

    // 卸载组件时调用
    componentWillUnmount() {
        console.log("unmount");
        clearInterval(this.timer);
    }

    

    render() {
        return(
            <div id="myapp">
                <h1>{this.state.date.toLocaleTimeString()}</h1>
            </div>
        );
    }
}

export default MyApp;