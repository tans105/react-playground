import './App.css';
import {Component} from "react";
import {TestComponent} from "./components/TestComponent";


class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            array: ['apple', 'mango', 'orange', 'banana'],
            user_name: 'USER 1'
        };
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    render() {
        const word = 'tanmay';
        const {array} = this.state;

        // var arrayToRender = [];
        //
        // array.forEach((word) => {
        //    arrayToRender.push(
        //        <li key={word}>{word}</li>
        //    )
        // });

        return (
            <div style={{fontSize: '20px'}}>
                <p>Hi {this.state.user_name}</p>
                {/*{arrayToRender}*/}
                <ul>
                    {array.map((word) => {
                        return <li key={word}>{word}</li>
                    })}
                </ul>
                <TestComponent/>
                <button onClick={() => console.log("Whoaaaa did you just press me ")}>Press Me !</button>
                <button onClick={this.consoleLog.bind(this)}>Press Me again!</button>
            </div>
        );
    }

    consoleLog() {
        this.setState({
            user_name: 'User changed'
        });
        console.log("Whoaaaa did you just press me ... again !");
    }

}


export default App;
