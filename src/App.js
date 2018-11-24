import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux'

import Home from './home'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="main">
          <Scene key="home" component={Home} initial hideNavBar />
          {/* <Scene key="drawer" component={Sidebar} hideNavBar /> */}
        </Scene>
      </Router>
    );
  }
}