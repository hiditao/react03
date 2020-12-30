import React, {Component} from "react";
import Image from "./Image";
import Led from "./Led";
import cat from "../img/cat.jpg";
import dog from "../img/dog.jpg";
import rabit from "../img/rabit.jpg";


class App extends Component {
    constructor(props) {
        super(props);

        this.timer = null;
        this.color = ["red", "green", "blue"];
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
        clearInterval(this.timer)
    }
  
  
    render() {
        return(
            <div>
                <Image imgnum={this.state.num} imgArr={this.imgArr} />
                <Led mynum={this.state.num} color={this.color}/>
                
            </div>
        );
    }
}

export default App;