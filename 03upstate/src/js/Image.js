import React,{Component} from "react";
import "../css/Image.css";

class Image extends Component {
    render() {
        console.log(this.props)

        return(
            <div className="lunbo">
                <ul className="pic">
                    <li>
                        <a href={this.props.imgArr[this.props.imgnum%3].href}>
                            <img className="images" src={this.props.imgArr[this.props.imgnum%3].url} alt="" />
                        </a>
                    </li>
                    {/* {this.imgArr.map(item => {
                        return <li key={item.id}>
                            <a href={item.href}>
                                <img className="images" src={item.url}/>
                            </a>
                        </li>
                    })} */}
                </ul>
            </div>
        )
    }
}

export default Image;