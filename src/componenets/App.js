import React, { Component } from 'react';
import { Link } from 'react-router';
import NavigationBar from './NavigationBar';
import FlashMeassagesList from './flash/FlashMeassagesList'

class App extends Component {
  render() {
    return (
        <div className='container'>
            <NavigationBar />
            <FlashMeassagesList />
            {this.props.children}
        </div>
    );
  }
}

export default App;
