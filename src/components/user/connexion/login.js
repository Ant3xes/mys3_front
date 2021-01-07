import React, { Component } from 'react'
import { Button, Form, Card } from 'react-bootstrap';
import './login.css'

export default class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password:''
        };

        this.handleChange = this.handleChange.bind(this);

    }

    _Login = () => {
        const api_url = "http://localhost:5000/api/";
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: this.state.email, password: this.state.password })
        };
        fetch(api_url + "auth/login", requestOptions)
        .then(response => response.json())
        .then(data => {
            localStorage.setItem("user_uuid", data.uuid)
            localStorage.setItem("token", "Bearer " + data.token)
        });
    }
    handleChange(event, type) {
        switch (type) {
            case "email":
                this.setState({ email: event.target.value })
                break;
            case "password":
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
                            <Button variant="dark" onClick={this._Login}>
                            Entrer
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
