import React, { Component } from 'react';

import './ExampleApp.css';

class ExampleApp extends Component {
  render() {
    return (
      <div className="App">
        <img
          className="App-Logo"
          src="https://user-images.githubusercontent.com/19409/31321658-f6aed0f2-ac3d-11e7-8100-1587e676e0ec.png"
          alt="Parcel Logo"
        />
        <h1 className="App-Title">React-Parcel Example</h1>
      </div>
    );
  }
}

export default ExampleApp;
