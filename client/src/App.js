
import React  from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";
import Home from './Components/login/Home';
 import Login from './Components/login/Login';

function App() {
  return (
    
    <Router>
      <div className="App">
      
      <Switch>
        <Route exact path = "/" component ={Login}/>
        <Route exact path = "/home" component = {Home} />
       </Switch>
       </div>
    </Router> 
    
  );

}

export default App;
