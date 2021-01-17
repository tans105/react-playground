import {Component} from "react";
import {TestComponent} from "./TestComponent";
import {Button, Navbar, Nav, NavDropdown, Form, FormControl, Table} from "react-bootstrap";
import Select from 'react-select';
import {fetchInfo} from "../actions/actions_info";
import {connect} from 'react-redux';

class AppComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            array: ['apple', 'mango', 'orange', 'banana'],
            user_name: 'USER 1',
            selectedOption: {value: null},
            jsonList: []
        };
    }

    handleChange = selectedOption => {
        this.setState(
            {selectedOption},
            () => console.log(`Option selected:`, this.state.selectedOption)
        );
    };

    componentDidMount() {
        this.props.dispatch(fetchInfo());
    }


    render() {
        const word = 'tanmay';
        const {array} = this.state;
        const {selectedOption} = this.state;
        const selectList = this.state.jsonList.map(json => {
            return {value: json.name, label: json.name}
        })

        // var arrayToRender = [];
        //
        // array.forEach((word) => {
        //    arrayToRender.push(
        //        <li key={word}>{word}</li>
        //    )
        // });

        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
                <div className="container-fluid">
                    <h1>Hi {this.state.user_name}</h1>
                    {/*{arrayToRender}*/}
                    <ul>
                        {array.map((word) => {
                            return <li key={word}>{word}</li>
                        })}
                    </ul>
                    <TestComponent user_name={this.state.user_name}/>

                    <Select
                        value={selectedOption}
                        onChange={this.handleChange.bind(this)}
                        options={selectList}
                    />

                    <div className="row">
                        <div className="col-md-1">
                            <button className='btn btn-primary'
                                    onClick={() => console.log("Whoaaaa did you just press me ")}>Press Me !
                            </button>
                        </div>
                        <div className="col-md-2">
                            <button className='btn btn-danger' onClick={this.consoleLog.bind(this)}>Press Me again!
                            </button>
                        </div>
                    </div>
                    <hr/>
                    <Table striped bordered condensed hover>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Address</th>
                            <th>Company</th>
                        </tr>
                        <tbody>
                        {this.state.jsonList.map(item => {
                            if (this.state.selectedOption.value == null || item.name === this.state.selectedOption.value) {
                                return (
                                    <tr>
                                        <td>{item.name}</td>
                                        <td>{item.age}</td>
                                        <td>{item.address}</td>
                                        <td>{item.company}</td>
                                    </tr>
                                )
                            }
                        })}
                        </tbody>
                    </Table>
                </div>
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

const App = connect()(AppComponent);
export default App;
