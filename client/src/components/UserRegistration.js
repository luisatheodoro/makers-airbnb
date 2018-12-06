import React, { Component } from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input, Button
} from 'reactstrap';
import '../App.css';

import { connect } from 'react-redux';
import { addUser } from '../actions/userActions';
import {Link} from 'react-router-dom'

class UserRegistration extends Component {
    state = {
        modal: false, //if the modal is open or not
        name: '', //a form input needs to have a redux state inside component
        email: '',
        password: ''
    };

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
        this.setState({[e.target.email]: e.target.value});
        this.setState({[e.target.password]: e.target.value});
    };

    onSubmit = e => {
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        };
        //Add name via addUser action
        this.props.addUser(newUser, this.props.history);
    };

    render() {
        return (
            <Container className="App">
                <h2>Find homes in United Kingdom on Makerbnb</h2>
                <h2>Discover entire homes and private rooms perfect for any trip.</h2>
                <Form onSubmit={this.onSubmit} className="form">
                    <Col>
                        <FormGroup>
                            <Label>Name</Label>
                            <Input
                                type="name"
                                name="name"
                                id="exampleName"
                                placeholder="Name"
                                onChange={this.onChange}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label>Email</Label>
                            <Input
                                type="email"
                                name="email"
                                id="exampleEmail"
                                placeholder="myemail@email.com"
                                onChange={this.onChange}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input
                                type="password"
                                name="password"
                                id="examplePassword"
                                placeholder="********"
                                onChange={this.onChange}
                            />
                        </FormGroup>
                    </Col>
                    <Button color="dark" style={{marginTop: '2rem'}} block>Sign Up</Button>
                </Form>
                <p className="already-signed-up">Already signed up? <Link to="/login">Login</Link></p>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
   user: state.user
});


module.exports = connect(mapStateToProps, {addUser})(UserRegistration);
