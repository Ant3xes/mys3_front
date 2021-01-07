import React, { Component } from 'react'
import { Button, Form, Card } from 'react-bootstrap';
import './login.css'
import {SignIn} from '../../../helpers/auth';

export default class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password:''
        };

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event, type) {
        switch (type) {
            case "email":
                console.log(event.target.value)
                this.setState({ email: event.target.value })
                break;
            case "password":
                console.log(event.target.value)
                this.setState({password: event.target.value})
                break;
            default:
                break;
        }
    }


    render() {
        return (
            <div>
                <Card className="Card">
                    <Card.Header className="Card-header">
                        Connexion
                    </Card.Header>
                    <Card.Body className="Card-body">
                        <Form >
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <input
                                    placeholder="Email"
                                    className="form-control"
                                    value={this.state.email}
                                    onChange= {(event) => {this.handleChange(event, "email")}}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <input
                                    placeholder="Password"
                                    className="form-control"
                                    value={this.state.password}
                                    onChange= {(event) => {this.handleChange(event, "password")}}/>
                            </Form.Group>
                            <Button variant="dark" type="submit" onClick={SignIn}>
                            Entrer
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
