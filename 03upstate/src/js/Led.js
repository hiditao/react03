import React, {Component} from "react";
import PropType from "prop-types";
import "../css/Led.css";


class Led extends Component {  
    render() {
        // 判断传递的参数是否是一个数组
        let flag = Array.isArray(this.props.color);
        let box = "";
        if(flag) {
            box = <div className="box" style={{backgroundColor: this.props.color[this.props.mynum%3]}}>
                    <div className="father" style={{ backgroundColor: this.props.color[(this.props.mynum+1)%3]}}>
                        <div  className="son" style={{ backgroundColor: this.props.color[(this.props.mynum+2)%3]}}></div>
                    </div>
                </div> 
        }
        return(
            box          
        );
    }
}

Led.protoTypes = {
    color: PropType.array
}



export default Led;