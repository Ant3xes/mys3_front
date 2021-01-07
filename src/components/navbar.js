import React, { Component } from 'react'
import { Nav, Navbar, Button } from 'react-bootstrap';
import './user/inscription/inscription'
import {Link} from "react-router-dom"

export default class navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

        // this.handleChange = this.handleChange.bind(this);
    }
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand>MyS3</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link><Link to="/storage">Storage</Link></Nav.Link>    
                    <Nav.Link><Link to="/">Connexion</Link></Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}


