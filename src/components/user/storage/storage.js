import React, { Component } from 'react'
import './storage.css'
import { Button, Form, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit, faPlus } from '@fortawesome/free-solid-svg-icons';

export default class storage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
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
            </div>
        )
    }
}
