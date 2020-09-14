
import { SignIn } from "./";

import React, { Component } from 'react';

class App extends Component {
    
   state ={
     counter: 1,
   }
   
  render() {
    return (
      <div>
        <SignIn />
      </div>
    );
  }
}

export default App;

