import React, { Component } from 'react'
import { Button, Form, Card } from 'react-bootstrap';
import './fichier.css'
import {SignIn} from '../../../../helpers/auth';

export default class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event, type) {
        switch (type) {
            case "name":
                console.log(event.target.value)
                this.setState({ name: event.target.value })
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
                        Ajouter d'un Fichier
                    </Card.Header>
                    <Card.Body className="Card-body">
                        <Form >
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Nom du fichier</Form.Label>
                                <input
                                    placeholder="Nom"
                                    className="form-control"
                                    value={this.state.name}
                                    onChange= {(event) => {this.handleChange(event, "name")}}/>
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