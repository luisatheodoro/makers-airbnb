import React, { Component } from 'react';
import { Button,
    Modal,
    ModalHeader,
    Form,
    FormGroup,
    Label,
    Input, ModalBody,
    Col,
    FormText
} from 'reactstrap';

import { connect } from 'react-redux';
import { addListing } from '../actions/listingActions';

class NewListingModal extends Component {
    state = {
        modal: false, //if the modal is open or not
        title: '', //a form input needs to have a redux state inside component
        description: '',
        price: 0,
    };
    toggle = () => {
        this.setState({
            modal: !this.state.modal,
        });
    };

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
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
                        <Form onSubmit={this.onSubmit} className="formModal">
                            <Col>
                                <FormGroup>
                                    <Label>Title</Label>
                                    <Input
                                        type="textarea"
                                        name="title"
                                        id="exampleTitle"
                                        placeholder="Add a title"
                                        value={this.state.title}
                                        onChange={this.onChange}
                                    />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label>Description</Label>
                                    <Input
                                        type="textarea"
                                        name="description"
                                        id="exampleDescription"
                                        placeholder="Describe your crib"
                                        value={this.state.description}
                                        onChange={this.onChange}
                                    />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label>Price</Label>
                                    <Input
                                        type="number"
                                        name="price"
                                        id="examplePrice"
                                        placeholder="Name your price"
                                        value={this.state.price}
                                        onChange={this.onChange}
                                    />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label for="exampleFile">File</Label>
                                    <Input type="file" name="file" id="exampleFile" />
                                    <FormText color="muted">
                                        Add your image
                                    </FormText>
                                </FormGroup>
                            </Col>
                            <Button
                                color="dark"
                                style={{marginTop: '2rem'}}
                                block
                            >
                                Add Listing
                            </Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    listings: state.listing
});


module.exports = connect(mapStateToProps, {addListing})(NewListingModal);