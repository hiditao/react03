import React,{Component} from "react";
import cat from "../img/cat.jpg";
import dog from "../img/dog.jpg";
import rabit from "../img/rabit.jpg";
import "../css/Image.css";

class Image extends Component {
    constructor(props) {
        super(props);

        this.timer = null;
        this.imgArr = [
            {
                id: 1,
                url: cat,
                href: "http://www.baidu.com"
            },
            {
                id: 2,
                url: dog,
                href: "http://www.baidu.com"
            },
            {
                id: 3,
                url: rabit,
                href: "http://www.baidu.com"
            }
        ]

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
        clearInterval(this.timer);
    }

    // 上一张
    left() {
        if(this.state.num <= 0) {
            this.setState({
                num: this.imgArr.length - 1
            })
        } else {
            this.setState({
                num: this.state.num - 1
            })
        }
    }

    // 下一张
    right() {
        this.setState({
            num: this.state.num + 1
        })
    }

    render() {
        return(
            <div className="lunbo">
                <ul className="pic">
                    <li>
                        <a href={this.imgArr[this.state.num%3].href}>
                            <img className="images" src={this.imgArr[this.state.num%3].url} alt="" />
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
                <div className="arrow left-arrow" onClick={this.left.bind(this)}>&lt;</div>
                <div className="arrow right-arrow" onClick={this.right.bind(this)}>&gt;</div>

            </div>
        )
    }
}

export default Image;