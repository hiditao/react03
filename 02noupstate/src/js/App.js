import React, {Component} from "react";
import Image from "./Image";
import Led from "./Led";


class App extends Component {
  
    render() {
        return(
            <div>
                <Image />
                <Led />
                
            </div>
        );
    }
}

export default App;