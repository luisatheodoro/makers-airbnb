import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/appNavBar';
import UsersList from './components/UsersList';
import UserModal from './components/UserModal';
import { Provider } from 'react-redux';
import store from './store';
import { Container } from 'reactstrap';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
              <div className="App">
                  <AppNavbar/>
                  <Container>
                      <UsersList/>
                      <UserModal/>
                  </Container>

              </div>
            </Provider>
        );
    }
}
module.exports = App;
