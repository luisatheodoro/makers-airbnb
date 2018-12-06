import React, { Component } from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input, Button
} from 'reactstrap';
import '../App.css';

import { connect } from 'react-redux';
import {Link} from 'react-router-dom'

class Login extends Component {


  render() {
    return (
      <Container className="App">
          <h2>Please enter your details below</h2>
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
              <Button color="dark" style={{marginTop: '2rem'}} block>Login</Button>
          </Form>
          <p className="already-signed-up">Not signed up? <Link to="/">Create a user</Link></p>
      </Container>
    )
  }
}

export default (Login);
