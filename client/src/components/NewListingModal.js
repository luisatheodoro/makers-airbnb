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
import { addListing } from '../actions/listingActions';

class NewListingModal extends Component {
    state = {
        modal: false, //if the modal is open or not
        title: '', //a form input needs to have a redux state inside component
        description: '',
        price:''
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    onChange = (e) => {
    this.setState({[e.target.title]: e.target.value});
    this.setState({[e.target.description]: e.target.value});
    this.setState({[e.target.price]: e.target.value});
    };

    onSubmit = e => {
      e.preventDefault();
      const newListing = {
        title: this.state.title,
        description: this.state.description,
        price: this.state.price
      };
      //Add name via addListing action
        this.props.addListing(newListing, this.props.history);

      //Close modal
        this.toggle();
    };

    render() {
        return(
            <div>
                <Button
                    color="dark"
                    style={{marginBottom: '2rem', marginTop: '5rem', marginLeft: '1rem'}}
                    onClick={this.toggle}
                >
                    Add a Listing
                </Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}> Add your listing</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="title"> Title </Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="title"
                                    placeholder="Title"
                                    onChange={this.onChange}
                                />
                                <Label for="description"> Description </Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="description"
                                    placeholder="Description"
                                    onChange={this.onChange}
                                />
                                <Label for="price"> Price </Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="price"
                                    placeholder="Price"
                                    onChange={this.onChange}
                                />
                                <Button
                                    color="dark"
                                    style={{marginTop: '2rem'}}
                                    block
                                >
                                    Add Listing
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
    listings: state.listings
});


module.exports = connect(mapStateToProps, {addListing})(NewListingModal);