import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';  //to get state from the redux
import { getListings, deleteListing } from '../actions/listingActions';
import PropTypes from 'prop-types';

class Listings extends Component {
    componentDidMount() {
        this.props.getListings();
    } //runs when the component mounts, when making an api request, this is where you want to do it

    onDeleteClick = (_id) => {
        this.props.deleteListing(_id);
    };

    render() {
        return(
            <Container>
                <ListGroup>
                    <TransitionGroup className="listings">
                        {this.props.listings && this.props.listings.listings && this.props.listings.listings.map(({_id, title, description, price}) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button className="remove-btn"
                                            color="danger"
                                            size="sm"
                                            onClick={this.onDeleteClick.bind(this, _id)}>
                                        &times;
                                    </Button>
                                    {title} || {description} £ {price}
                                </ListGroupItem>

                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}
//When you get an item from redux it's going to be stores into a props
Listings.propTypes = {
    getListings: PropTypes.func.isRequired
    //listing: PropTypes.object.isRequired  //this represent a state which is an object
};

const mapStateToProps = (state) => ({
    listings: state.listings
});


module.exports = connect(mapStateToProps, { getListings, deleteListing })(Listings);
