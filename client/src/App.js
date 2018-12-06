import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/appNavBar';
import UserRegistration from './components/UserRegistration';
import Listings from './components/Listings';
import {Provider} from 'react-redux';
import store from './store';
import {Container} from 'reactstrap';
import Router from "react-router/Router";
import Route from "react-router/Route";
import createBrowserHistory from "history/createBrowserHistory";

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <Router history={createBrowserHistory()}>
            <div className="App">
              <AppNavbar/>
              <Container>
                <Route path="/" exact component={UserRegistration}/>
                <Route path="/listings" component={Listings} />
                {/*<Route path="/sign-in" component={Listings} />*/}
              </Container>
            </div>
          </Router>
        </Provider>
    );
  }
}

module.exports = App;
