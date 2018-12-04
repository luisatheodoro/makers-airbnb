import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    Form,
    FormGroup,
    Label,
    Input, ModalBody
} from 'reactstrap';

import { connect } from 'react-redux';
import { addUser } from '../actions/userActions';

class UserModal extends Component {
    state = {
        modal: false, //if the modal is open or not
        name: '', //a form input needs to have a redux state inside component
        email: '',
        password: ''
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
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
        this.props.addUser(newUser);

      //Close modal
        this.toggle();
    };

    render() {
        return(
            <div>
                <Button
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={this.toggle}
                >
                    Add User
                </Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}> Add user's list</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="user"> Name </Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="user"
                                    placeholder="Name"
                                    onChange={this.onChange}
                                />
                                <Label for="email"> Email </Label>
                                <Input
                                    type="text"
                                    name="email"
                                    id="user"
                                    placeholder="Email"
                                    onChange={this.onChange}
                                />
                                <Label for="password"> Password </Label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="user"
                                    placeholder="Password"
                                    onChange={this.onChange}
                                />
                                <Button
                                    color="dark"
                                    style={{marginTop: '2rem'}}
                                    block
                                >
                                    Add User
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}
const mapStateToProps = state => ({
   user: state.user
});


module.exports = connect(mapStateToProps, {addUser})(UserModal);