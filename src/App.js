import './App.css';
import {Component} from "react";
import {TestComponent} from "./components/TestComponent";


class App extends Component {

    componentDidMount() {
        console.log('componentDidMount');
    }

    render() {
        var word = 'tanmay';
        var array = ['apple', 'mango', 'orange', 'banana'];

        // var arrayToRender = [];
        //
        // array.forEach((word) => {
        //    arrayToRender.push(
        //        <li key={word}>{word}</li>
        //    )
        // });

        return (
            <div style={{fontSize: '20px'}}>
                <p>Hi {word}</p>
                {/*{arrayToRender}*/}
                <ul>
                    {array.map((word) => {
                       return <li key={word}>{word}</li>
                    })}
                </ul>
                <TestComponent/>
                <button onClick={() => console.log("Whoaaaa did you just press me ")}>Press Me !</button>
                <button onClick={this.consoleLog}>Press Me again!</button>
            </div>
        );
    }

    consoleLog() {
        console.log("Whoaaaa did you just press me ... again !");
    }

}


export default App;
