import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import './user/inscription/inscription'

export default class navbar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">MyS3</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">User</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}


