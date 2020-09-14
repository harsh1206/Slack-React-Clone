
import { SignIn } from "./";

import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';

class App extends Component {
    
   state ={
     counter: 1,
   }
   
  render() {
    return (
      <div>
         <Switch>
            <Route exact path="/" component={SignIn} />           
         </Switch>
      </div>
    );
  }
}

export default App;

