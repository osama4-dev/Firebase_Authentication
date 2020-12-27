import { AuthProvider } from "./contexts/AuthContext"
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'
import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar'



class App extends Component  {
  render(){
    return (
      <AuthProvider>
        <Toolbar/>
    
         <Switch>
       <Route path="/SignUp" component={SignUp} />
       <Route path="/SignIn" component={SignIn} />
       <Route path="/" exact component={SignIn} />
         
       </Switch>
       </AuthProvider>
    );  
  }
  
}

export default App;
