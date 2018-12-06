import React, { Component } from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input, Button
} from 'reactstrap';
import '../App.css';
import {addUser, getUsers} from '../actions/userActions';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'

class Login extends Component {
    state = {
        email: '',
        password: '',
        error: '',
        redirectToReferrer: false
    };

    onChange = (e) => {
        this.setState({[e.target.email]: e.target.value});
    };

    onSubmit = e => {
        e.preventDefault();
        const user = {
            email: this.state.email || undefined,
            password: this.state.password || undefined
        };
        this.props.getUsers(user, this.props.history);
    };

  render() {
    return (
      <Container className="App">
          <h2>Please enter your details below</h2>
          <Form onSubmit={this.onSubmit} className="form">
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

const mapStateToProps = state => ({
    user: state.user
});


module.exports = connect(mapStateToProps, {getUsers})(Login);