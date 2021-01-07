import React, { Component } from 'react'
import { Button, Form, Card } from 'react-bootstrap';

export default class forgotPassword extends Component {
    render() {
        return (
            <div>
                <Card className="Card">
                    <Card.Header className="Card-header">
                        Forgot Password
                    </Card.Header>
                    <Card.Body className="Card-body">
                        <Form >
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Your E-mail address</Form.Label>
                                <Form.Control type="email" placeholder="Enter E-mail address" />
                            </Form.Group>
                            <Button variant="dark" type="submit">
                                Send E-mail
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
