import React, { Component } from 'react';

import '../App.css';

import { Button } from "../containers/Button.js";
// import ProgressView from "./ProgressView";

class App extends Component {
  render() {
    return (
      <div className="App App-header">
          <Button />
          {/* {<ProgressView />} */}
      </div>
    );
  }
}

export default App;
