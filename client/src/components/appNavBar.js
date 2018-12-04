import React, { Component } from 'react';
import {
    Navbar,
    NavbarToggler,
    Container, NavbarBrand
} from 'reactstrap';

class AppNavBar extends Component {
    state = {
        isOpen: false
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">MakersBnB</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                    </Container>
                </Navbar>
            </div>
        );
    }
}



module.exports = AppNavBar;