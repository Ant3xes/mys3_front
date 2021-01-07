import React, { Component } from 'react'
import './storage.css'
import { Button, Form, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit, faPlus } from '@fortawesome/free-solid-svg-icons';
import Modal from '../modal';

export default class storage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalShow: false
        }
        this.showModal = this.showModal.bind(this);
    }
    
    showModal = () => {
        this.setState({ modalShow: !this.state.modalShow });
    };
    render() {
        if(!this.state.modalShow) {
            return (
                <div className="m-2 mt-5">          
                    <ul className="list-group-flush">
                        <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
                            Cras justo odio
                            <span className="ButtonsGroup">
                                <span className="Buttons badge bg-white ml-1 "><FontAwesomeIcon icon={faPlus} /> </span>
                                <span className="Buttons badge bg-white ml-1 "><FontAwesomeIcon icon={faEdit} /></span>
                                <span className="Buttons badge bg-white ml-1 "><FontAwesomeIcon icon={faTrash} /></span>
                            </span>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action ml-5">
                            Dapibus ac facilisis in
                            <span className="ButtonsGroup">
                                <span className="Buttons badge bg-white rounded-pill ml-1"><FontAwesomeIcon icon={faPlus} /> </span>
                                <span className="Buttons badge bg-white rounded-pill ml-1"><FontAwesomeIcon icon={faEdit} /></span>
                                <span className="Buttons badge bg-white rounded-pill ml-1"><FontAwesomeIcon icon={faTrash} /></span>
                            </span>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action ml-5">Morbi leo risus</a>
                        <a href="#" className="list-group-item list-group-item-action ml-5">Porta ac consectetur ac</a>
                    </ul>
                    <button className="btn btn-primary" onClick={this.showModal}>Show modal</button>
                </div>
            )
        } else {
            return (
                <div>
                    <Modal showModal={this.showModal}/>
                    <Card className="Card">
                        <Card.Header className="Card-header_1">
                            Ajouter un dossier
                        </Card.Header>
                        <Card.Body className="Card-body">
                            <Form >
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Name</Form.Label>
                                    <input
                                        placeholder="Name"
                                        className="form-control"
                                        value={this.state.nickname}
                                        onChange= {(event) => {this.handleChange(event, "nickname")}}/>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                    <Card className="Card">
                        <Card.Header className="Card-header_2">
                            Ajouter un Fichier
                        </Card.Header>
                        <Card.Body className="Card-body">
                            <Form >
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Name</Form.Label>
                                    <input
                                        placeholder="Name"
                                        className="form-control"
                                        value={this.state.nickname}
                                        onChange= {(event) => {this.handleChange(event, "nickname")}}/>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            )
        }
    }
}
