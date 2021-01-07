import React, { Component } from 'react'
import { Button, Form, Card } from 'react-bootstrap';
import './add_file.css'

export default class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            file: null
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
    _UploadFile = () => {
        const api_url = "http://efrei-mystrois.herokuapp.com/api/";
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Authorization: localStorage.getItem("token") },
            body: { file: this.state.file }
        };
        fetch(api_url + "blobs/" + this.props.match.params.bucket_uuid, requestOptions)
        .then(res => res.json())
        .then(data => {
            console.log(data) 
        })
    }
    changeFile = (event) => {
        this.setState({file: event.target.files[0]})
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
                                    onChange= {(event) => {this.handleChange(event, "name")}}
                                />
                                <input type="file" className="m-3" onChange={(event) => {this.changeFile(event)}} />
                            </Form.Group>
                            <Button variant="dark" onClick={this._UploadFile}>
                            Entrer
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}