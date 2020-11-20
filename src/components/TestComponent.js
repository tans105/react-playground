import {Component} from "react";

export class TestComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name_displayed: 'First Name',
        }
    }

    componentDidMount() {
        console.log('componentDidMount Test');
    }

    /*
    Lifecycle method to capture the change in props
     */
    componentWillReceiveProps(nextProps) {
        console.log(nextProps);

        if (this.props.user_name !== nextProps.user_name) {
            this.setState({
                name_displayed: nextProps.user_name
            });
        }
    }

    render() {
        const {user_name} = this.props;
        const {name_displayed} = this.state;
        return (
            <div style={{fontSize: '20px'}}>
                <p>{name_displayed}</p>
                <p>Hi {user_name}</p>
            </div>
        );
    }
}
