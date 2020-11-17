import {Component} from "react";

export class TestComponent extends Component {

    componentDidMount() {
        console.log('componentDidMount Test');
    }

    render() {
        var word = 'Bucky';
        return (
            <div style={{fontSize: '20px'}}>
                <p>Hi {word}</p>
            </div>
        );
    }
}
