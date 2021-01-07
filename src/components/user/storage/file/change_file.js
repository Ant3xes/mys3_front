import React, { Component } from 'react'
import { Button, Form, Card } from 'react-bootstrap';
import './change_file.css'
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
                this.setState({ name: event.target.value })
                break;
            default:
                break;
        }
    }
    _UpdateBlob = () => {
        const api_url = "http://efrei-mystrois.herokuapp.com/api/";
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', Authorization: localStorage.getItem("token") },
            body: { new_name: this.state.name }
        };
        fetch(api_url + "blobs/" + this.props.match.params.blob_uuid, requestOptions)
        .then(res => res.json())
        .then(data => {
            console.log(data) 
        })
    }

    render() {
        return (
            <div>
                <Card className="Card">
                    <Card.Header className="Card-header">
                        Changement d'un Fichier
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
                            <Button variant="dark" onClick={this._UpdateBlob}>
                            Entrer
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}