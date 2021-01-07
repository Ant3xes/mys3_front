import React, { Component } from 'react'
import { Button, Form, Card } from 'react-bootstrap';
import './inscription.css'
import {SignIn} from '../../../helpers/auth';

export default class inscription extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nickname:'',
            email: '',
            password:'',
            confirmed_password: '',
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, type) {
        switch (type) {
            case "nickname":
                console.log(event.target.value)
                this.setState({ nickname: event.target.value })
                break;
            case "email":
                console.log(event.target.value)
                this.setState({ email: event.target.value })
                break;
            case "password":
                console.log(event.target.value)
                this.setState({password: event.target.value})
                break;
            case "confirmed_password":
                console.log(event.target.value)
                this.setState({ confirmed_password: event.target.value })
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
                        Inscription
                    </Card.Header>
                    <Card.Body className="Card-body">
                        <Form >
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Nickname</Form.Label>
                                <input
                                    placeholder="Nickname"
                                    className="form-control"
                                    value={this.state.nickname}
                                    onChange= {(event) => {this.handleChange(event, "nickname")}}/>
                            </Form.Group>
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
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <input
                                    placeholder="Password"
                                    className="form-control"
                                    value={this.state.confirmed_password}
                                    onChange= {(event) => {this.handleChange(event, "confirmed_password")}}/>
                            </Form.Group>
                            <Button variant="dark" type="submit" onClick={SignIn} >
                                Entrer
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
        </div>
        )
    }
}
