import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';  //to get state from the redux
import { getUsers, deleteUser } from '../actions/userActions';
import PropTypes from 'prop-types';

class UsersList extends Component {
    componentDidMount() {
        this.props.getUsers();
    } //runs when the component mounts, when making an api request, this is where you want to do it

    onDeleteClick = (_id) => {
    this.props.deleteUser(_id);
};

    render() {
        const { users } = this.props.user;
        return(
            <Container>
                <ListGroup>
                    <TransitionGroup className="users-list">
                        {users.map(({_id, name, email}) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button className="remove-btn"
                                            color="danger"
                                            size="sm"
                                    onClick={this.onDeleteClick.bind(this, _id)}>
                                        &times;
                                    </Button>
                                    {name} {email}
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
UsersList.propTypes = {
    getUsers: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired  //this represent a state which is an object
};

const mapStateToProps = (state) => ({
    user: state.user
});


module.exports = connect(mapStateToProps, { getUsers, deleteUser })(UsersList);