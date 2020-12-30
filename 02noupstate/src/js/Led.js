import React, {Component} from "react";
import "../css/Led.css";


class Led extends Component {
    constructor(props){
        super(props);

        this.timer = null;
        this.color = ["red", "green", "blue"];

        this.state = {
            num: 0
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                num: this.state.num + 1
            })
        }, 1000)

    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }
  
    render() {
        return(
            <div className="box" style={{backgroundColor: this.color[this.state.num%3]}}>
                <div className="father" style={{ backgroundColor: this.color[(this.state.num+1)%3]}}>
                    <div  className="son" style={{ backgroundColor: this.color[(this.state.num+2)%3]}}></div>
                </div>
            </div>
        );
    }
}

export default Led;